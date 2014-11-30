
'use strict';


var audio = require('../services/audio');

module.exports = function($scope, player) {

  console.log('MainCtrl');

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
  
};
