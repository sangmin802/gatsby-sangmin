import React, { useMemo, useCallback } from "react";
import _ from "lodash";
import scrollProps from "../utils/scrollPostProps";
import { graphql } from "gatsby";
import { useNavigation } from "../hook/useNavigation";
import { useRefinedPost } from "../hook/useRefinedPost";
import { useIntersectionObserver } from "../hook/useIntersectionObserver";
import { usePost } from "../hook/usePost";
import { isBrowser } from "../utils/isBrowser";
import Layout from "../layout/layout";
import NavigationContainer from "../component/navigation-container/index";
import ThumbnailContainer from "../component/thumbnail-container/index";
import Observer from "../component/observer/index";

const Post = ({ data }) => {
  // Not rendering in server environment
  if (!isBrowser()) return null;

  const allMDFile = data.allMarkdownRemark.edges;
  const title = data.site.siteMetadata.title;
  const { navigation, setNavigation } = useNavigation();
  const { category, tag } = navigation;

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
    return arr;
  }, [allMDFile, category]);
  const selectedT = tags[tag];

  // category, tag posts
  const { refinedPost } = useRefinedPost(selectedC, selectedT, allMDFile);
  // visible posts
  const { state: post, setPost } = usePost(refinedPost);

  // infinit scroll intersectionObserver
  const infinitScrollCallback = useCallback(
    entries => {
      entries.forEach(entry => {
        if (scrollProps.count * scrollProps.size >= refinedPost.length) return;
        if (entry.intersectionRatio > 0) {
          scrollProps.count++;
          setPost(
            refinedPost.slice(0, (scrollProps.count + 1) * scrollProps.size)
          );
        }
      });
    },
    [refinedPost, setPost]
  );
  useIntersectionObserver(infinitScrollCallback, ".observer");

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
      <Observer />
    </Layout>
  );
};

export default React.memo(Post, () => true);

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
          excerpt(pruneLength: 200, truncate: true)
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
