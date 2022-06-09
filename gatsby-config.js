module.exports = {
  siteMetadata: {
    title: 'Sylvain DENYSE',
    titleTemplate: '%s · Sylvain DENYSE',
    description: "Site web personnel d'un développeur web.",
    image: '/images/Avatar.jpg',
    twitterUsername: '@sylvaindenyse',
    siteUrl: `https://sylvaindenyse.me`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-build-date`,
      options: { locale: 'fr' },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-emotion',
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sylvain DENYSE — Développeur Web',
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
    'gatsby-plugin-portal',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 80,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
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
