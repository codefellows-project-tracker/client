'use strict';

module.exports = function(app) {
  app.component('cptSignup', {
    controller: 'AuthController',
    template: require('./signup-template.html'),
    bindings: {
      baseUrl: '<',
    }
  });
};
