
exports.createPages = async ({
  actions,
  graphql,
}) => {
  const result = await graphql(`
    query MyQuery {
      tracks: allTracksJson(
        sort: {
          fields: date,
          order: DESC
        }
      ) {
        nodes {
          id
          name
          title
        }
      }
    }
  `)

  const tracks = result.data.tracks.nodes

  tracks.forEach(({ id, name, title }) => {
    actions.createPage({
      path: '/' + name,
      component: require.resolve('./src/track.js'),
      context: {
        id,
        name,
        title
      }
    })
  })
}
