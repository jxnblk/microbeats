
'use strict';


module.exports = function($http, $location, player) {
  return {
    scope: true,
    link: function(scope, el, attr) {
      var $ = angular.element;
      var items = $(el).children();

      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var track = {
          index: item.dataset.index,
          permalink: item.dataset.permalink,
          title: item.dataset.title,
          src: item.dataset.src
        };

        scope.tracks.push(track);
        player.load(track, i);
      };

      if ($location.hash()) {
        var currentTrack = $location.hash();
        scope.tracks.forEach(function(track, i) {
          if (track.permalink == currentTrack ) {
            player.i = i;
            player.currentTrack = player.tracks[player.i];
          }
        });
      }

    }
  }
};

