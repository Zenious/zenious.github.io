module.exports = {
  siteMetadata: {
    title: `Zheng Wei`,
    description: `Personal Website`,
    author: `@zenious`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zheng Wei's Site`,
        short_name: `Zheng Wei`,
        start_url: `/`,
        background_color: `#50514F`,
        theme_color: `#50514F`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon-squared.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
