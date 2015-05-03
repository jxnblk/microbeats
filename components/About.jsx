
var React = require('react');

var About = React.createClass({

  render: function() {
    return (
      <section id="about" className="py4 mb4 border-top">
        <h1>About</h1>
        <p className="h3">Microbeats is an experiment in music production emphasizing quantity over quality. All loops are created by Jxnblk in under an hour and not mixed down or mastered.</p>
        <p>
          This site is built with <a href="https://facebook.github.io/react/" target="_blank">React</a>, <a href="http://basscss.com" target="_blank">Basscss</a>, <a href="https://www.npmjs.com/package/audio-player" target="_blank">audio-player</a>, <a href="http://webpack.github.io/" target="_blank">webpack</a>, <a href="https://github.com/markdalgleish/static-site-generator-webpack-plugin" target="_blank">static-site-generator-webpack-plugin</a> and runs off the <a href="http://soundcloud.com" target="_blank">SoundCloud API</a>. View this project on <a href="http://github.com/jxnblk/Microbeats" target="_blank">GitHub</a>.
        </p>
      </section>
    )
  }

});

module.exports = About;

