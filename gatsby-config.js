module.exports = {
  siteMetadata: {
    title: "gatsby-sangmin",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-lodash",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/post/`,
      },
      __key: "pages",
    },
  ],
};
