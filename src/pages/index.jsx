import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layout/layout";
import ThumbnailContainer from "../component/thumbnail-container/index";

// markup
const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;
  return (
    <Layout>
      <Link to="/post">POST</Link>
      <ThumbnailContainer edges={edges} title="Recent Post" type="-recent" />
    </Layout>
  );
};

export default IndexPage;

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
  }
`;
