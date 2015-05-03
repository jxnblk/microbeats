
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
      currentIndex: 0,
      player: player || false,
      currentTime: 0,
      duration: 0,
      color: 'black',
      backgroundColor: 'white',
    }
  },

  playPause: function(i) {
    if (typeof i === 'undefined') {
      i = this.state.currentIndex;
    }
    var track = this.props.tracks[i];
    var src = track.stream_url + '?client_id=' + this.props.client_id;
    if (player) {
      player.playPause(src);
      this.setState({ currentIndex: i, playing: player.playing });
    }
  },

  pause: function() {
    if (player) {
      player.pause();
      this.setState({ playing: player.playing });
    }
  },

  next: function() {
    var i = this.state.currentIndex;
    if (i < this.props.tracks.length) {
      i++;
      this.playPause(i);
    }
  },

  previous: function() {
    var i = this.state.currentIndex;
    if (i > 0) {
      i--;
      this.playPause(i);
    } else {
      this.pause();
    }
  },

  seek: function(e) {
    e.offsetX = e.clientX - e.target.offsetLeft;
    if (player) {
      player.seek(e);
    }
  },

  componentDidMount: function() {
    if (typeof window !== 'undefined') {
      var self = this;
      player.audio.addEventListener('timeupdate', function() {
        self.setState({
          currentTime: player.audio.currentTime,
          duration: player.audio.duration
        });
      });
    }
  },

  render: function() {
    var initialProps = { __html: safeStringify(this.props) };

    var styles = {
      controls: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 2,
      },
      tracks: {
        position: 'relative',
        zIndex: 1,
        marginTop: '13rem'
      }
    };

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>{this.props.name}</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.bass }} />
        </head>
        <body className={'container px2 ' + this.state.color + ' bg-' + this.state.backgroundColor}>
          <div style={styles.controls}
            className={this.state.color + ' bg-' + this.state.backgroundColor}>
            <div className="container px2">
              <Controls {...this.props}
                {...this.state}
                playPause={this.playPause}
                seek={this.seek}
                previous={this.previous}
                next={this.next} />
            </div>
          </div>
          <div style={styles.tracks}>
            <Tracks {...this.props}
              {...this.state}
              playPause={this.playPause} />
          </div>
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

