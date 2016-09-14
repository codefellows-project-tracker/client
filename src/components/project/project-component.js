'use strict';

module.exports = function(app) {
  app.component('cptProject', {
    controller: 'SingleProjectController',
    template: require('./project-template.html'),
  });
};
