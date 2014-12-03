
'use strict';


var audio = require('../services/audio');

module.exports = function($scope, $location, player) {

  $scope.tracks = [];
  $scope.player = player;
  $scope.audio = audio;

  $scope.currentTime = player.currentTime;
  $scope.duration = player.duration;

  $scope.playPause = function(i) {
    player.playPause(i);
  };

  $scope.previous = function() {
    player.previous();
    $location.hash(player.currentTrack.permalink);
  };

  $scope.next = function() {
    player.next();
    $location.hash(player.currentTrack.permalink);
  };

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
        $scope.playPause(player.i);
        break;
      case 39:
      case 74:
        $scope.next();
        break;
      case 37:
      case 75:
        $scope.previous();
        break;
    };
  };
  
};
