'use strict';

module.exports = function(app) {
  app.controller('NavController', ['$location', function($location){
    this.isCollapsed = true;

    this.isActive = function(location) {
      return location === $location.path();
    };
  }]);
};
