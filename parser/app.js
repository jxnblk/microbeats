'use strict';

var clientID = '0d33361983f16d2527b01fbf6408b7d7';
SC.initialize({ client_id: clientID });

var app = angular.module('app', []);

app.controller('MainCtrl', ['$scope', function($scope){
  $scope.resolve = function(){
    SC.get('/resolve.json?url=' + $scope.url , function(data){
       $scope.$apply(function () {
          // Handle playlists (i.e. sets)
          if (data.tracks) $scope.playlist = data;
          // Handle single track
          else if (data.kind == 'track') $scope.track = data;
          // Handle all other data
          else $scope.data = data;
       });
      });
  };
}]);

  