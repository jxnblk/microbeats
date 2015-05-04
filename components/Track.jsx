
var React = require('react');
var moment = require('moment');

var Track = React.createClass({

  handleClick: function(e) {
    this.props.playPause(this.props.index);
  },

  render: function() {
    var yyyymmdd = this.props.track.created_at.split(' ')[0];
    var date = moment(yyyymmdd, 'YYYY/MM/DD').format('MMM D, YYYY');
    var active = this.props.index === this.props.currentIndex;
    var styles = {
      anchor: {
        position: 'relative',
        top: '-15rem',
        visibility: 'hidden'
      }
    };
    return (
      <button
        id={'button-' + this.props.track.permalink}
        className={'col-12 block left-align button button-transparent ' + (active ? this.props.backgroundColor + ' bg-' + this.props.color : '')}
        onClick={this.handleClick}>
        <div id={this.props.track.permalink}
          style={styles.anchor} />
        <div className="flex flex-baseline">
          <div className="h6 mr1">
            {(this.props.tracks.length - this.props.index) + '.'}
          </div>
          <div className="flex-auto">
            {this.props.track.title}
          </div>
          <div className="h6 regular">
            {date}
          </div>
        </div>
      </button>
    )
  }

});

module.exports = Track;
