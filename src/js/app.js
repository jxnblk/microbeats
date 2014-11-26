// App

'use strict';

var app = angular.module('app', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('{%');
  $interpolateProvider.endSymbol('%}');
});

// Services
app.service('player', require('./services/player'));

// Filters

// Controllers
app.controller('MainCtrl', require('./controllers/main'));

