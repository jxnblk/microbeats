
var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="py3 border-top">
        <div className="flex flex-baseline mxn2">
          <a href="http://soundcloud.com/jxnblk"
            target="_blank"
            className="button button-transparent">
            SoundCloud
          </a>
          <div className="flex-auto" />
          <a href="http://jxnblk.com"
            target="_blank"
            className="button button-transparent">
            Made by Jxnblk
          </a>
        </div>
      </footer>
    )
  }

});

module.exports = Footer;

