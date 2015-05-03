
var React = require('react');
var Progress = require('./Progress.jsx');
var Icon = require('react-geomicons');
var hhmmss = require('hhmmss');


var Controls = React.createClass({

  playPause: function(e) {
    this.props.playPause();
  },

  render: function() {
    var title = this.props.tracks[this.props.currentIndex].title;
    var progress = (this.props.duration * this.props.currentTime / this.props.duration) || 0;
    return (
      <div className="center py3">
        <h1 className="h2 mt0">{title}</h1>
        <div className="inline-block">
          <div className="flex flex-center mx-auto">
            <button className="h2 button button-transparent"
              onClick={this.props.previous}>
                <Icon name="previous" />
            </button>
            <button className="h1 button button-transparent"
              onClick={this.playPause}>
              <Icon name={this.props.playing ? 'pause' : 'play' } />
            </button>
            <button className="h2 button button-transparent"
              onClick={this.props.next}>
                <Icon name="next" />
            </button>
          </div>
        </div>
        <div>
          <Progress className="progress"
            onClick={this.props.seek}
            value={progress}
            min={this.props.currentTime}
            max={this.props.duration} />
          <div className="flex h6">
            <div>{hhmmss(this.props.currentTime)}</div>
            <div className="flex-auto" />
            <div>{hhmmss(this.props.duration)}</div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Controls;

