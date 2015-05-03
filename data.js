
var cssnext = require('cssnext');

module.exports = {
  name: 'microbeats',
  tracks: require('./tracks.json'),
  client_id: '1c21814089b72a7cd4ce9246009ddcfb',
  bass: [
    cssnext('@import "basscss";@import "vhs";', {
      compress: true,
      features: {
        customProperties: {
          variables: {
            'font-family': '"Helvetica Neue", Helvetica, sans-serif',
            'container-width': '40rem'
          }
        },
        rem: false,
        colorRgba: false,
        pseudoElements: false,
      }
    }),
    '.progress::-webkit-progress-bar { background-color: transparent }'
  ].join(' ')
};
