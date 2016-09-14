'use strict';

module.exports = function(app) {
  app.controller('ProjectController', ['$http', function($http) {
    this.projects = [];

    let baseUrl = `${__API_URL__}/api/project`;

    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    this.createProject = function(project) {
      $http.post(baseUrl, project, config)
        .then(res => {
          this.projects.push(res.data);
        })
        .catch(err => {
          err(err);
        })
    };

  }]);
};
