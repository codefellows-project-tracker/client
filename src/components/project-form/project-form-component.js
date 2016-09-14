'use strict';

module.exports = function(app) {
  app.component('cptProjectForm', {
    template: require('./project-form-template.html'),
    controller: 'ProjectController',
  });
};
