'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');


const angular = require('angular');
require('angular-ui-router');

const cptApp = angular.module('cptApp', [require('angular-jwt'), 'ui.router']);

cptApp.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
  //$locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    url: '/home',
    template: require('./html/index.html'),
  })
  .state('/about', {
    url: '/about',
    template: require('./html/home.html')
  });
}]);
