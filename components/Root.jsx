
var _ = require('lodash');
var React = require('react');
var Controls = require('./Controls.jsx');
var Tracks = require('./Tracks.jsx');
var About = require('./About.jsx');
var Footer = require('./Footer.jsx');

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
      theme: 0,
      color: 'black',
      backgroundColor: 'white',
      tracks: this.props.initialTracks
    }
  },

  playPause: function(i) {
    if (typeof i === 'undefined') {
      i = this.state.currentIndex;
    }
    var track = this.state.tracks[i];
    var src = track.stream_url + '?client_id=' + this.props.client_id;
    if (player) {
      player.playPause(src);
      this.setState({ currentIndex: i, playing: player.playing });
      var updateHash = _.debounce(function() {
        window.location.hash = track.permalink;
      }, 100);
      updateHash();
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
    if (i < this.state.tracks.length) {
      i++;
      this.playPause(i);
      this.toggleTheme();
    }
  },

  previous: function() {
    var i = this.state.currentIndex;
    if (i > 0) {
      i--;
      this.playPause(i);
      this.toggleTheme();
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

  reverse: function() {
    var tracks = this.state.tracks;
    tracks.reverse();
    this.setState({ tracks: tracks });
  },

  toggleTheme: function() {
    var themes = [
      { color: 'black', backgroundColor: 'white' },
      { color: 'white', backgroundColor: 'black' },
      { color: 'red', backgroundColor: 'black' },
      { color: 'red', backgroundColor: 'white' },
      { color: 'maroon', backgroundColor: 'white' },
      { color: 'maroon', backgroundColor: 'teal' },
      { color: 'blue', backgroundColor: 'white' },
      { color: 'navy', backgroundColor: 'gray' },
      { color: 'navy', backgroundColor: 'teal' },
    ];
    var i = this.state.theme;
    if (i < themes.length - 1 ) {
      i++;
    } else {
      i = 0;
    }
    this.setState({ theme: i });
    this.setState(themes[i]);
  },

  handleKeydown: function(e) {
    if (e.metaKey) { return false; }
    switch(e.keyCode) {
      case 32:
        e.preventDefault();
        this.playPause();
        break;
      case 74:
        e.preventDefault();
        this.next();
        break;
      case 75:
        e.preventDefault();
        this.previous();
        break;
      case 90:
        e.preventDefault();
        this.toggleTheme();
        break;
      case 88:
        e.preventDefault();
        this.reverse();
        break;
    }
  },

  componentDidMount: function() {
    if (typeof window !== 'undefined') {
      var hash = window.location.hash;
      if (hash) {
        var index = _.findIndex(this.state.tracks, { permalink: hash.replace('#', '') })
        if (index > -1) {
          this.setState({ currentIndex: index });
        }
      }
      var self = this;
      player.audio.addEventListener('timeupdate', function() {
        self.setState({
          currentTime: player.audio.currentTime,
          duration: player.audio.duration
        });
      });
      player.audio.addEventListener('ended', function() {
        self.next();
      });
      window.addEventListener('keydown', self.handleKeydown);
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
        marginTop: '14rem',
      },
      nav: {
        position: 'fixed',
        zIndex: 3,
        top: 0,
        right: 0,
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
        <body className={'transition-color px2 ' + this.state.color + ' bg-' + this.state.backgroundColor}>
          <div style={styles.controls}
            className={'transition-color ' + this.state.color + ' bg-' + this.state.backgroundColor}>
            <div className="container px2">
              <Controls {...this.props}
                {...this.state}
                playPause={this.playPause}
                seek={this.seek}
                previous={this.previous}
                next={this.next} />
            </div>
          </div>
          <div className="container" style={styles.tracks}>
            <Tracks {...this.props}
              {...this.state}
              playPause={this.playPause} />
          </div>
          <div className="container">
            <About />
            <Footer />
          </div>
          <nav className="flex flex-baseline mr1" style={styles.nav}>
            <h1 className="h5 m0">
              <a href="#" className="button button-transparent">Microbeats</a>
            </h1>
            <a href="#about" className="button button-transparent">About</a>
          </nav>
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

