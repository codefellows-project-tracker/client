'use strict';

module.exports = function(app) {
  app.controller('NavController', ['$location', 'auth', function($location, auth){
    this.isCollapsed = true;

    this.getUser = auth.getUser.bind(auth);

    this.logOut = auth.logOut.bind(auth)

    this.isActive = function(location) {
      return location === $location.path();
    };
  }]);
};
