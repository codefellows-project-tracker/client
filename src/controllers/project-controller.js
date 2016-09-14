'use strict';

module.exports = function(app) {
  app.controller('ProjectController', ['$http', 'auth', function($http, auth) {
    this.projects = [];

    this.token = auth.getToken();

    let baseUrl = `${__API_URL__}/api/project`;

    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      },
    };

    this.getProjects = function() {
      $http.get(baseUrl, config)
        .then(res => {
          this.projects = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    this.createProject = function(project) {
      console.log(project)
      $http.post(baseUrl, project, config)
        .then(res => {
          this.projects.push(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    };

  }]);
};
