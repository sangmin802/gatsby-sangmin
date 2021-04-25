import React, { useMemo, useCallback } from "react";
import _ from "lodash";
import scrollProps from "../utils/scrollPostProps";
import { graphql } from "gatsby";
import { useNavigation } from "../hook/useNavigation";
import { useRefinedPost } from "../hook/useRefinedPost";
import { usePost } from "../hook/usePost";
import { isBrowser } from "../utils/isBrowser";
import { useThrottle } from "../hook/useThrottle";
import Layout from "../layout/layout";
import NavigationContainer from "../component/navigation-container/index";
import ThumbnailContainer from "../component/thumbnail-container/index";
import Observer from "../component/observer/index";

const Post = ({ data }) => {
  // Not rendering in server environment
  if (!isBrowser()) return null;

  const allMDFile = data.allMarkdownRemark.edges;
  const title = data.site.siteMetadata.title;

  // navigation reducer
  const key = window.history.state.key;
  const initialNav = key ? { category: 0, tag: 0 } : { ...history };
  const NavReducer = useCallback((state, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "category":
        {
          newState.category = action.nav;
          newState.tag = 0;
        }
        break;
      case "tag":
        {
          newState.tag = action.nav;
        }
        break;
      default:
        null;
    }
    window.history.replaceState(newState, "", window.location.pathname);
    return newState;
  }, []);
  const {
    navigation: { category, tag },
    setNavigation,
  } = useNavigation(NavReducer, initialNav);

  // categories, selected category name
  const categories = useMemo(() => {
    const arr = _.uniq(
      allMDFile.map(
        ({
          node: {
            frontmatter: { category },
          },
        }) => category
      )
    );
    return arr;
  }, [allMDFile]);
  const selectedC = categories[category];

  // tags, selected tag name
  const tags = useMemo(() => {
    const arr = _.compact(
      _.uniq(
        allMDFile.map(({ node: { frontmatter } }) =>
          frontmatter.category === selectedC ? frontmatter.tag : null
        )
      )
    );
    arr.unshift("All");
    return arr;
  }, [allMDFile, category]);
  const selectedT = tags[tag];

  // category, tag posts
  const { refinedPost } = useRefinedPost(selectedC, selectedT, allMDFile);

  // visible posts
  const { state: post, setPost } = usePost(refinedPost);

  // infinit scroll intersectionObserver
  const throttleAct = useThrottle(post);
  const infinitScrollCallback = useCallback(
    entries => {
      entries.forEach(entry => {
        if (scrollProps.count * scrollProps.size >= refinedPost.length) return;
        if (entry.intersectionRatio > 0)
          throttleAct(() => {
            scrollProps.count++;
            setPost(
              refinedPost.slice(0, (scrollProps.count + 1) * scrollProps.size)
            );
          });
      });
    },
    [refinedPost, setPost, throttleAct]
  );

  return (
    <Layout title={`${title} - Post`}>
      <nav className="fixed-navigation">
        <NavigationContainer
          nameArr={categories}
          selected={category}
          type="category"
          setNavigation={setNavigation}
        />
        {tags.length !== 0 && (
          <NavigationContainer
            nameArr={tags}
            selected={tag}
            type="tag"
            setNavigation={setNavigation}
          />
        )}
      </nav>
      <ThumbnailContainer
        edges={post}
        title={`${selectedC}${selectedT ? ` - ${selectedT}` : ""}`}
      />
      <Observer callback={infinitScrollCallback} />
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            category
            date
            tag
            coverImage
          }
          html
          id
          fields {
            slug
          }
          excerpt(pruneLength: 100, truncate: true)
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
