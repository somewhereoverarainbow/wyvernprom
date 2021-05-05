module.exports = {
  siteMetadata: {
    title: "Wyvern Prom",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "r1UzrH32h1QUYlaxoLRWhqBJXMRqjN42GKdn2M5pBAo",
        spaceId: "qp1nmm47tdkv",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
