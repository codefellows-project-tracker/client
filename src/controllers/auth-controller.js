'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', '$window', 'auth',
  function($http, $location, $window, auth) {
    const baseUrl = `${__API_URL__}/api/user`;
    // if (auth.getToken({noRedirect: true})) $location.path('/notes');
    this.passMatch = true;
    this.closeAlert = function() {
      this.passMatch = true;
      this.badLogin = false;
    };
    this.signup = function(user) {
      if (user.password !== user.verifyPass) {
        this.passMatch = false;
        return;
      }
      $http.post(baseUrl, user)
        .then(() => {
          this.passMatch = true;
          $location.path('/');
        }, (err) => {
          console.log(err);
        });
    };
    this.badLogin = false;
    this.signin = function(user) {
      $http.post(`${__API_URL__}/api/login`, user)
        .then((res) => {
          auth.setToken(res.data.token);
          $location.path('/');
        }, () => {
          this.badLogin = true;
        });
    };

    this.getUser = auth.getUser.bind(auth);
    this.logOut = auth.logOut.bind(auth);
    this.currentUser = auth.currentUser;
  }]);
};
