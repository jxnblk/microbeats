
'use strict';


var audio = require('../services/audio');

module.exports = function($scope, player) {

  $scope.tracks = [];
  $scope.player = player;
  $scope.audio = audio;

  $scope.currentTime = player.currentTime;
  $scope.duration = player.duration;

  audio.addEventListener('timeupdate', function() {
    $scope.$apply(function() {
      $scope.currentTime = audio.currentTime;
      $scope.duration = audio.duration;
    });
  });

  $scope.keydown = function(e) {
    //console.log('keydown', e.which);
    switch (e.which) {
      case 32:
        e.preventDefault();
        player.playPause(player.i);
        break;
      case 39:
      case 74:
        player.next();
        break;
      case 37:
      case 75:
        player.previous();
        break;
    };
  };
  
};
