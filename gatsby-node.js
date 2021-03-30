const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// 포스트 이동을 위한 slug(경로) 생성
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "slug",
      value: `/post${slug}`,
    });
  }
};

// slug별 포스트 생성
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/template/blog-post.jsx"),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
