'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', '$window', 'auth', function($http, $location, $window, auth) {
    let baseUrl = `${__API_URL__}/api/user`;
    // if (auth.getToken({noRedirect: true})) $location.path('/notes');
 this.passMatch = true;
 this.closeAlert = function() {
   this.passMatch = true;
 };
    this.signup = function(user) {
      console.log(user);
      if(user.password !== user.verifyPass){
       this.passMatch = false;
       return;
     };
      $http.post(baseUrl, user)
        .then((res) => {
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
        }, (err) => {
          this.badLogin = true;
        })
    };

    this.getUser = auth.getUser.bind(auth);
    this.logOut = auth.logOut.bind(auth);
    this.currentUser = auth.currentUser;
  }]);
};
