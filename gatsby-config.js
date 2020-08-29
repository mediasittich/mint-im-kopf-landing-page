const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

console.log(process.env.GATSBY_ACTIVE_ENV)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: "Mint im Kopf",
    titleTemplate:
      "Mint im Kopf · Professionelle Nachhilfe in Mathe, Physik und Chemie in München und Umgebung",
    description:
      "Mint im Kopf · Professionelle Nachhilfe in Mathe, Physik und Chemie in München und Umgebung",
    url: "https://www.mint-im-kopf.de", // No trailing slash allowed!
    siteUrl: "https://www.mint-im-kopf.de", // No trailing slash allowed!
    image: "/images/Logo_small.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
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
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //If using single types place them in this array.
        singleTypes: [
          `about`,
          `hero`,
          `impressum`,
          `kontakt`,
          `konzept`,
          `leistungen`,
          `pricing`,
          `reviews`,
          `seo`,
          `gdpr`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`900`],
          },
          {
            family: `Work Sans`,
            variants: [`300`],
          },
          {
            family: `Roboto`,
            variants: [`300`, `400`, `500`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mint im Kopf · Professionelle Nachhilfe in Mathe, Physik und Chemie in München und Umgebung`,
        short_name: `Mint im Kopf`,
        start_url: `/`,
        background_color: `#68ba82`,
        theme_color: `#68ba82`,
        display: `minimal-ui`,
        icon: `src/images/mint-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
        anonymize: true,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
