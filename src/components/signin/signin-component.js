'use strict';

module.exports = function(app) {
  app.component('cptSignin', {
    controller: 'AuthController',
    template: require('./signin-template.html'),
  });
};
