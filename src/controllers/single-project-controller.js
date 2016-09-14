'use strict';

module.exports = function(app) {
  app.controller('SingleProjectController', ['$http', '$stateParams', 'auth', function($http, $stateParams, auth) {

    let baseUrl = `${__API_URL__}`;

    let id = $stateParams.id;

    $http.get(baseUrl + '/api/project/' + id)
      .then(res => {
        this.project = res.data
        console.log(this.project)
      })
  }]);
};
