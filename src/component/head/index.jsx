import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const Head = ({ title: _title }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const {
          site: {
            siteMetadata: { description, title },
          },
        } = data;
        return (
          <Helmet defaultTitle={title}>
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <title>{_title}</title>
          </Helmet>
        );
      }}
    />
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default Head;
