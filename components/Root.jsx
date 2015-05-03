
var React = require('react');
var Controls = require('./Controls.jsx');
var Tracks = require('./Tracks.jsx');

if (typeof window !== 'undefined') {
  var Player = require('audio-player');
  var player = new Player();
}

var Root = React.createClass({

  getInitialState: function() {
    return {
      playing: false,
      index: 0,
      player: player || false,
      currentTime: 0,
    }
  },

  playPause: function(i) {
    i = i || this.state.index;
    var track = this.props.tracks[i];
    var src = track.stream_url + '?client_id=' + this.props.client_id;
    if (player) {
      player.playPause(src);
      this.setState({ index: i, playing: player.playing });
    }
  },

  next: function() {
    var i = player.playing;
  },

  previous: function() {
  },

  componentDidMount: function() {
    if (typeof window !== 'undefined') {
      var self = this;
      player.audio.addEventListener('timeupdate', function() {
        console.log(player.audio.currentTime);
        self.setState({ currentTime: player.audio.currentTime });
      });
    }
  },

  render: function() {
    var initialProps = { __html: safeStringify(this.props) };

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>{this.props.name}</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.bass }} />
        </head>
        <body className="">
          <Controls {...this.props}
            {...this.state}
            playPause={this.playPause} />
          <Tracks {...this.props}
            {...this.state}
            playPause={this.playPause} />
          <script id="initial-props" type="application/json" dangerouslySetInnerHTML={initialProps} />
          <script src="bundle.js" />
        </body>
      </html>
    )
  }

});

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

module.exports = Root;

