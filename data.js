
var fs = require('fs');
var cssnext = require('cssnext');
var styles = fs.readFileSync('styles.css', 'utf8');

module.exports = {
  name: 'microbeats',
  tracks: require('./tracks.json'),
  client_id: '1c21814089b72a7cd4ce9246009ddcfb',
  bass: cssnext(
    [
      '@import "basscss";',
      '@import "vhs";',
      styles
    ].join('\n'),
    {
      compress: true,
      features: {
        customProperties: {
          variables: {
            'font-family': '"Helvetica Neue", Helvetica, sans-serif',
            'container-width': '40rem',
            'bold-font-weight': '500',
            'heading-font-weight': '500',
          }
        },
        rem: false,
        colorRgba: false,
        pseudoElements: false,
      }
    }
  ),
};
