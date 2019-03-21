module.exports = {
  siteMetadata: {
    title: 'Alex J. Gustafson',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Alex J. Gustafson Tech',
        short_name: 'Alex Gustafson',
        start_url: '/',
        background_color: '#314963',
        theme_color: '#314963',
        display: 'minimal-ui',
        icon: 'src/images/alex-logo.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /svgs/
          }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/homeservices`,
        name: "homeservices",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
