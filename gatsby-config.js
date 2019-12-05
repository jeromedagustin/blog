module.exports = {
  pathPrefix: "/blog",
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Out For All To See`,
    author: `Jerome Agustin`,
    description: `Using GitHub and Gatsby Blog Theme, I wanted to start sharing ideas and my projects.`,
    siteUrl: "https://jeromedagustin.github.io/blog",
    social: [
      // {
      //   name: `twitter`,
      //   url: `https://twitter.com/gatsbyjs`,
      // },
      {
        name: `github`,
        url: `https://github.com/jeromedagustin`,
      },
    ],
  },
}
