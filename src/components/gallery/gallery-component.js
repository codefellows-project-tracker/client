'use strict';

module.exports = function(app) {
  app.component('cptGallery', {
    controller: 'ProjectController',
    template: require('./gallery-template.html')
  });
};
