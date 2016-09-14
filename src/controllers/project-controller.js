'use strict';

module.exports = function(app) {
  app.controller('ProjectController', ['$http', function($http) {
    this.projects = [];

    console.log('hey')

    let baseUrl = `${__API_URL__}/api/project`;

    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
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
      $http.post(baseUrl, project, config)
        .then(res => {
          this.projects.push(res.data);
        })
        .catch(err => {
          console.log(err);
        })
      console.log(project)
    };

  }]);
};
