
var cssnext = require('cssnext');

module.exports = {
  name: 'microbeats',
  tracks: require('./tracks.json'),
  client_id: '1c21814089b72a7cd4ce9246009ddcfb',
  bass: cssnext('@import "basscss";', {
    //compress: true,
    features: {
      customProperties: {
        variables: {
          'font-family': '"Helvetica Neue", Helvetica, sans-serif'
        }
      },
      rem: false,
      colorRgba: false,
      pseudoElements: false,
    }
  }),
};
