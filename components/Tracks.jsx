
var React = require('react');
var Track = require('./Track.jsx');

var Tracks = React.createClass({

  renderTrack: function(track, i) {
    return (
      <li key={'track-'+i}>
        <Track {...this.props} index={i} track={track} />
      </li>
    )
  },

  render: function() {
    return (
      <ul className="list-reset">
        {this.props.tracks.map(this.renderTrack)}
      </ul>
    )
  }

});

module.exports = Tracks;

