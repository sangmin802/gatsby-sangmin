module.exports = {
  siteMetadata: {
    title: "SANGMIN.COM",
    description: "SDD - Sangmin Develop Directory",
    siteUrl: "https://github.com/sangmin802/gatsby-sangmin",
    utterances: "sangmin802/gatsby-sangmin",
    siteLink: {
      Portfolio: "https://sangmin802.github.io/portfolio/",
      Github: "https://github.com/sangmin802",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-lodash",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/post/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-prismjs"],
      },
    },
  ],
};
