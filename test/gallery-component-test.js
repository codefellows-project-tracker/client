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
    new $controller('ProjectController', { $scope: this.scope });
  }));

  it('should have projects', function() {
    let projectList = this.compile(require('./gallery-template-test.html'))(this.scope);
    this.scope.$digest();
    expect(projectList.find('img').length).toBe(8);
  });
});

describe('nav component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile, $controller){
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should have 3 uls', function() {
    let projectList = this.compile(require('./gallery-template-test.html'))(this.scope);
    this.scope.$digest();
    expect(projectList.find('ul').length).toBe(8);
  });
});
