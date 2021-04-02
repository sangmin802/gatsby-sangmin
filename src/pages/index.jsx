import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import ThumbnailContainer from "../component/thumbnail-container/index";

// markup
const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
    site: {
      siteMetadata: { title },
    },
  } = data;
  return (
    <Layout title={title}>
      <ThumbnailContainer edges={edges} title="Recent Post" type="-recent" />
    </Layout>
  );
};

export default React.memo(IndexPage, () => true);

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 8
    ) {
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
