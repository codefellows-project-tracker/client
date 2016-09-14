'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', '$window', 'auth', function($http, $location, $window, auth) {
    let baseUrl = `${__API_URL__}/api/user`;
    // if (auth.getToken({noRedirect: true})) $location.path('/notes');

    this.signup = function(user) {
      $http.post(baseUrl, user)
        .then((res) => {
          console.log(res)
          $location.path('/notes');
        }, (err) => {
          console.log(err);
        });
    };

    this.signin = function(user) {
      console.log(user);
      $http.post(`${__API_URL__}/api/login`, user)
        .then((res) => {
          auth.setToken(res.data.token);
          $location.path('/');
        }, (err) => {
          console.log(err);
        })
    };

    this.getUser = auth.getUser.bind(auth);
    this.logOut = auth.logOut.bind(auth);
    this.currentUser = auth.currentUser;
  }]);
};
