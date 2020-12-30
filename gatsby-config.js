module.exports = {
  siteMetadata: {
    siteUrl: `https://sylvaindenyse.me`,
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-emotion',
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
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
  ],
}
