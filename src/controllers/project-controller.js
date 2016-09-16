'use strict';

module.exports = function(app) {
  app.controller('ProjectController', ['$http', '$location', 'auth', function($http, $location, auth) {
    this.projects = [];


    this.token = auth.getToken();

    let baseUrl = `${__API_URL__}/api/project`;


    this.getProjects = function() {
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      };
      $http.get(baseUrl, config)
        .then(res => {
          this.projects = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    this.createProject = function(project) {
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token,
        },
      };
      $http.post(baseUrl, project, config)
        .then(res => {
          this.projects.push(res.data);
          $location.path('/')
        })
        .catch(err => {
          console.log(err);
        })
    };

    this.currentPage = 1;
    this.pageSize = 6;

  }]);
};
