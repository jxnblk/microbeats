
exports.createPages = async ({
  actions,
  graphql,
}) => {
  const result = await graphql(`
    query MyQuery {
      tracks: allTracksJson {
        nodes {
          id
          name
        }
      }
    }
  `)

  const tracks = result.data.tracks.nodes

  tracks.forEach(({ id, name, }) => {
    actions.createPage({
      path: '/' + name,
      component: require.resolve('./src/track.js'),
      context: {
        id,
        name,
      }
    })
  })
}
