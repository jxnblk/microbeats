// App

'use strict';

var app = angular.module('app', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('{%');
  $interpolateProvider.endSymbol('%}');
});

// Services
app.factory('player', require('./services/player'));

// Directives
app.directive('tracklist', require('./directives/tracklist'));

// Filters

// Controllers
app.controller('MainCtrl', require('./controllers/main'));

module.exports = app;
