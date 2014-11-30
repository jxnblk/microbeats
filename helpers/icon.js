
var Handlebars = require('handlebars');
var Geomicons = require('geomicons-open');

module.exports = function(key) {
  var svg = Geomicons.toString(key);
  return new Handlebars.SafeString(svg);
};

