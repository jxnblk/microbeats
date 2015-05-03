
var React = require('react');
var Icon = require('react-geomicons');
var hhmmss = require('hhmmss');

var Controls = React.createClass({

  playPause: function(e) {
    this.props.playPause();
  },

  render: function() {
    return (
      <div>
        <button className="button button-transparent"
          onClick={this.playPause}>
          <Icon name={this.props.playing ? 'pause' : 'play' } />
        </button>
        <Icon name="previous" />
        <Icon name="next" />
        <samp>{hhmmss(this.props.currentTime)}</samp>
      </div>
    )
  }

});

module.exports = Controls;

