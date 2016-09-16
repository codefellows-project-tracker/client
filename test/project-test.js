'use strict';

const angular = require('angular');
const testApp = angular.module('testApp', [require('angular-jwt'), require('angular-ui-router'), require('angular-ui-bootstrap'), require('angular-animate'), require('angular-touch')]);

require('../src/services')(testApp);
require('../src/controllers')(testApp);
require('../src/components')(testApp);

describe('gallery component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile, $stateParams, $httpBackend, $controller){
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.$httpBackend = $httpBackend;
    $stateParams.id = '57d9a21a6dcd4387b699105b';
    this.singleProjCtrl = new $controller('SingleProjectController');
  }));

  it('should have a project', () => {
    let url = 'http://localhost:3141/api/project/57d9a21a6dcd4387b699105b';
    this.$httpBackend.expectGET(url)
    .respond(200, {
      name: 'Project 1',
      _id: '1234',
      __v: 0,
      hostedUrl: 'http://google.com',
      githubUrl: 'http://github.com',
      image: 'test.url/image.jpg',
      description: 'cool proj',
      classType: '201',
      classNumber: 'd4',
      approved: true,
      tech: ['JS'],
    });
    this.$httpBackend.flush();
  });
});
