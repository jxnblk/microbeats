
var fs = require('fs');
var cssnext = require('cssnext');
var styles = fs.readFileSync('styles.css', 'utf8');

module.exports = {
  name: 'microbeats',
  initialTracks: require('./tracks.json'),
  client_id: '1c21814089b72a7cd4ce9246009ddcfb',
  bass: cssnext(
    [
      '@import "basscss-base-reset";',
      '@import "basscss-base-buttons";',
      '@import "basscss-base-typography";',
      '@import "basscss-utility-layout";',
      '@import "basscss-utility-typography";',
      '@import "basscss-white-space";',
      '@import "basscss-grid";',
      '@import "flex-object";',
      '@import "basscss-color-base";',
      '@import "basscss-button-transparent";',
      '@import "basscss-progress";',
      '@import "basscss-borders";',
      '@import "basscss-defaults";',
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
            'button-font-size': 'var(--h5)',
          }
        },
        rem: false,
        colorRgba: false,
        pseudoElements: false,
      }
    }
  ),
};
