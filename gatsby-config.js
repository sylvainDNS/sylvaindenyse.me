module.exports = {
  siteMetadata: {
    title: 'Sylvain DENYSE',
    titleTemplate: '%s · Sylvain DENYSE',
    description: 'Personal website of a web developer.',
    image: '/images/Avatar.jpg',
    twitterUsername: '@sylvaindenyse',
    siteUrl: `https://sylvaindenyse.me`,
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-emotion',
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sylvain DENYSE - Web Developer Designer',
        short_name: 'Sylvain DENYSE',
        start_url: '/',
        background_color: '#eff4ff',
        theme_color: '#eff4ff',
        display: 'standalone',
        icon: 'src/images/icon.png',
        icon_options: {
          purpose: `maskable`,
        },
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-transformer-sharp',
  ],
}
