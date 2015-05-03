
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
    return (
      <button className={'col-12 block left-align button button-transparent ' + (active ? 'white bg-black' : '')}
        onClick={this.handleClick}>
        <div className="flex">
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
