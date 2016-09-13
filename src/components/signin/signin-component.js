'use strict';

module.exports = function(app) {
  app.component('cptSignin', {
    controller: function() {},
    template: require('./signin-template.html'),
  });
};
