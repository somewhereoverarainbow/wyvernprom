module.exports = {
  siteMetadata: {
    title: "Wyvern Prom",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "3w_LSKQg4d0BruZkfLGG8Rfc6uYmdl_H-isbtLj4GI4",
        spaceId: "",
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
