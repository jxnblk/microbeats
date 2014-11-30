
'use strict';


module.exports = ['$http', 'player', function($http, player) {
  console.log(player);
  return {
    scope: true,
    link: function(scope, el, attr) {
      var $ = angular.element;
      var items = $(el).children();
      //scope.tracks = scope.tracks || [];
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var track = {
          index: item.dataset.index,
          title: item.dataset.title,
          src: item.dataset.src
        };

        scope.tracks.push(track);
        player.load(track, i);
      };

    }
  }
}];

