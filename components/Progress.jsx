
var React = require('react');

var Progress = React.createClass({
  render: function() {
    var styles = {
      borderRadius: 0,
      border: '2px solid currentcolor',
      backgroundColor: 'transparent',
      cursor: 'pointer'
    };
    return (
      <progress className="progress"
        {...this.props}
        style={styles} />
    )
  }
});

module.exports = Progress;

