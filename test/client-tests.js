'use strict';

const angular = require('angular');
const testApp = angular.module('testApp', [require('angular-jwt'), require('angular-ui-router'), require('angular-ui-bootstrap'), require('angular-animate'), require('angular-touch')]);

require('../src/services')(testApp);
require('../src/controllers')(testApp);
require('../src/components')(testApp);

describe('gallery component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile, $controller){
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should have 8 projects', function() {
    let projectForm = this.compile(require('./project-form-test.html'))(this.scope);
    this.scope.$digest();
    expect(projectForm.find('label').length).toBe(9);
  });

  it('should have a select option', function() {
    let projectForm = this.compile(require('./project-form-test.html'))(this.scope);
    this.scope.$digest();
    expect(projectForm.find('select').length).toBe(1);
  })
});

describe('nav component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile, $controller){
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should have 3 lists', function() {
    let nav = this.compile(require('./nav-template-test.html'))(this.scope);
    this.scope.$digest();
    expect(nav.find('ul').length).toBe(3);
  });

  it('should have a href', function() {
    let nav = this.compile(require('./nav-template-test.html'))(this.scope);
    this.scope.$digest();
    expect(nav.find('a').length).toBe(5);
  });
});

describe('single project component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile, $controller, $stateParams, $httpBackend){
    this.compile = $compile;
    this.scope = $rootScope.$new();
    $stateParams.id = 1234;
    this.id = $stateParams.id;
    this.$httpBackend = $httpBackend;
    this.singleProjCtrl = new $controller('SingleProjectController');
  }));

  it('should have 1 project', function() {
    let url = 'http://localhost:3141/api/project/' + this.id;
    this.$httpBackend.expectGET(this.url)
      .respond(200, [{
        name: 'Cool Project',
        classNumber: 'd8',
        classType: '301',
        hostedUrl: 'http://google.com',
        githubUrl: 'http://github.com',
        image: 'http://imgur.com/4.jpg',
        description: 'O hai mark',
        tech: ['Python'],
      }]);
    this.$httpBackend.flush();
    expect(this.singleProjCtrl.project[0].name).toBe('Cool Project');
    expect(this.singleProjCtrl.project[0].description).toBe('O hai mark');
  });
});
it('should have multiple project', function() {
  let url = 'http://localhost:3141/api/project/';
  this.$httpBackend.expectGET(this.url)
    .respond(200, [{
      name: 'Cool Project',
      classNumber: 'd8',
      classType: '301',
      hostedUrl: 'http://google.com',
      githubUrl: 'http://github.com',
      image: 'http://imgur.com/4.jpg',
      description: 'O hai mark',
      tech: ['Python'],
    },
    {
      name: 'Very Cool Project',
      classNumber: 'd9',
      classType: '401',
      hostedUrl: 'http://google.com',
      githubUrl: 'http://github.com',
      image: 'http://imgur.com/4asdf.jpg',
      description: 'O hai mark',
      tech: ['Python'],
    }]);
  this.$httpBackend.flush();
  expect(this.singleProjCtrl.project[0].name).toBe('Cool Project');
  expect(this.singleProjCtrl.project[0].description).toBe('O hai mark');
  expect(this.singleProjCtrl.project[1].tech[0]).toBe('Python')
});
});
