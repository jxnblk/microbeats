
'use strict';


//var app = require('../app');

module.exports = ['$http', 'player', function($http, player) {
  console.log(player);
  return {
    scope: true,
    link: function(scope, el, attr) {
      var $ = angular.element;
      var tracks = $(el).children();
      scope.tracks = scope.tracks || [];
      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];

        scope.tracks.push({
          index: track.dataset.index,
          title: track.dataset.title,
          url: track.dataset.url
        });
      };
    }
  }
}];

