import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import Utterances from "../component/utterances/index";
import "../style/md.scss";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const {
    siteMetadata: { utterances, title },
  } = data.site;
  return (
    <Layout title={`${title} - ${post.frontmatter.title}`}>
      <div className="markdown-body">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      {utterances && <Utterances repo={utterances} />}
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        utterances
        title
      }
    }
  }
`;
