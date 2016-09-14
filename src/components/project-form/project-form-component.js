'use strict';

module.exports = function(app) {
  app.component('cptProjectForm', {
    controller: function() {
      this.lol = 'lol';
    },
    template: require('./project-form-template.html'),
  });
};
