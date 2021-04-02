import React, { useMemo } from "react";
import _ from "lodash";
import { graphql } from "gatsby";
import { useNavigation } from "../hook/useNavigation";
import { useRefinedPost } from "../hook/useRefinedPost";
import { useScrollPost } from "../hook/useScrollPost";
import { usePost } from "../hook/usePost";
import Layout from "../layout/layout";
import NavigationContainer from "../component/navigation-container/index";
import ThumbnailContainer from "../component/thumbnail-container/index";
import Observer from "../component/observer/index";

const Post = ({ data }) => {
  const allMDFile = data.allMarkdownRemark.edges;
  const title = data.site.siteMetadata.title;
  const { state: tag, setNavigation: setTag } = useNavigation();
  const { state: category, setNavigation: setCategory } = useNavigation(setTag);
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
    arr.unshift("All");
    return arr;
  }, [allMDFile]);
  const tags = useMemo(() => {
    const arr = _.compact(
      _.uniq(
        allMDFile.map(({ node: { frontmatter } }) =>
          frontmatter.category === category ? frontmatter.tag : null
        )
      )
    );
    arr.length !== 0 ? arr.unshift("All") : arr;
    return arr;
  }, [allMDFile, category]);
  const { refinedPost } = useRefinedPost(category, tag, allMDFile);
  const { state: post, setPost } = usePost(refinedPost);
  useScrollPost(refinedPost, setPost);

  return (
    <Layout title={`${title} - Post`}>
      <NavigationContainer
        navigation={categories}
        selected={category}
        setNavigation={setCategory}
      />
      {tags.length !== 0 && (
        <NavigationContainer
          navigation={tags}
          selected={tag}
          setNavigation={setTag}
        />
      )}
      <ThumbnailContainer
        edges={post}
        title={`${category}${tag === "All" ? "" : ` - ${tag}`}`}
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
