module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-mdx',
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
