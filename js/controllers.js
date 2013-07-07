'use strict';

angular.module('microbeats.controllers', [])

  .controller('MainCtrl', ['$scope', '$http', 'player', 'audio', '$location', '$anchorScroll', function($scope, $http, player, audio, $location, $anchorScroll) {
    
    $scope.player = player;
    $scope.audio = audio;

    $http.get('tracks-lite.json').success(function(data){
      $scope.tracks = data;
      if($location.hash()){
        for (var i = 0; i < $scope.tracks.length; i++) {
          if ($scope.tracks[i].permalink == $location.hash()) player.loadTrack($scope.tracks, i);
        };
      };
    });
    
  }])

  .controller('ScrubberCtrl', ['$scope', 'audio', function($scope, audio) {
      $scope.currentTimeMS = 0;
      $scope.durationMS = 0;
      function updateView() {
        $scope.$apply(function() {
          $scope.currentBufferPercentage = ((audio.buffered.length && audio.buffered.end(0)) / audio.duration) * 100;
          $scope.currentTimePercentage = (audio.currentTime / audio.duration) * 100;
          $scope.currentTimeMS = (audio.currentTime * 1000).toFixed();
          $scope.durationMS = (audio.duration * 1000).toFixed();
        });
      };  
      audio.addEventListener('timeupdate', updateView, false);
      $scope.seekTo = function($event){
        var xpos = $event.offsetX / $event.target.offsetWidth;
        audio.currentTime = (xpos * audio.duration);
      };
  }])

  .controller('SettingsCtrl', ['$scope', function($scope){
    
  }])

;
