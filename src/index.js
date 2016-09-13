'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');


const angular = require('angular');

const cptApp = angular.module('cptApp', [require('angular-jwt'), require('angular-ui-router'), require('angular-ui-bootstrap')]);

require('./components')(cptApp);

cptApp.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: require('./html/home.html'),
        controller: function () {
            this.title = 'This is page 1';
        },
        controllerAs: 'test'
      })
      .state('about', {
        url: '/about',
        template: require('./html/about.html')
      });
}]);
