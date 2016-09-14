'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');
require('file?name=[name].[ext]!./img/logo.png');


const angular = require('angular');

const cptApp = angular.module('cptApp', [require('angular-jwt'), require('angular-ui-router'), require('angular-ui-bootstrap'), require('angular-animate'), require('angular-touch')]);


require('./services')(cptApp);
require('./controllers')(cptApp);
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
        controllerAs: 'test',
      })
      .state('about', {
        url: '/about',
        template: require('./html/about.html'),
      })
      .state('signin', {
        url: '/signin',
        template: require('./html/signin.html'),
      })
      .state('signup', {
        url: '/signup',
        template: require('./html/signup.html'),
      })
      .state('formSubmit', {
        url: '/submit',
        template: require('./html/project-submit.html'),
      });
}]);
