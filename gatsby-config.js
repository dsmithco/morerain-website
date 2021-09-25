module.exports = {
  siteMetadata: {
    title: 'More Rain | Songs of Worship',
    author: 'Daniel Moraine Smith',
    description: '"More Rain" is the moniker for worship songs by Daniel Moraine Smith with the goal to lead others into Christ-centered worship. Each song is created with the desire to express simple, authentic, and christ-centered adoration for God. Daniel (Dan) leads worship regularly and serves in his local church\'s various ministries.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
