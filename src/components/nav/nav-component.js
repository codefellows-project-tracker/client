'use strict';

module.exports = function(app){
  app.component('cptNav', {
    controller: 'NavController',
    template: require('./nav-template.html'),
  });
};
