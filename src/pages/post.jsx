import React, { useMemo } from "react";
import _ from "lodash";
import { graphql } from "gatsby";
import useNavigation from "../hook/useNavigation";
import usePost from "../hook/usePost";
import Layout from "../layout/layout";
import NavigationContainer from "../component/navigation-container/index";
import ThumbnailContainer from "../component/thumbnail-container/index";

const Post = ({ data }) => {
  const allMDFile = data.allMarkdownRemark.edges;
  const { state: tag, setNavigation: setTag } = useNavigation();
  const { state: category, setNavigation: setCategory } = useNavigation(setTag);
  const categories = useMemo(() => {
    return _.uniq(
      allMDFile.map(
        ({
          node: {
            frontmatter: { category },
          },
        }) => category
      )
    );
  }, [allMDFile]);
  const tags = useMemo(() => {
    const arr = _.compact(
      _.uniq(
        allMDFile.map(({ node: { frontmatter } }) =>
          frontmatter.category === categories[category] ? frontmatter.tag : null
        )
      )
    );
    return arr.length !== 0 ? arr : null;
  }, [allMDFile, categories, category]);
  const targetCategory = categories ? categories[category] : null;
  const targetTag = tags ? tags[tag] : null;
  const { refinedPost } = usePost(targetCategory, targetTag, allMDFile);

  return (
    <Layout>
      <NavigationContainer
        navigation={categories}
        selected={category}
        setNavigation={setCategory}
      />
      {tags && (
        <NavigationContainer
          navigation={tags}
          selected={tag}
          setNavigation={setTag}
        />
      )}
      <ThumbnailContainer edges={refinedPost} />
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
          excerpt(pruneLength: 200, truncate: true)
        }
      }
    }
  }
`;
