module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto Mono:400,700'
        ]
      }
    },
  ]
}
