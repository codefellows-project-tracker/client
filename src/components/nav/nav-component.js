'use strict';

module.exports = function(app){
  app.component('cptNav', {
    controller: function() {
      this.isCollapsed = true;
      this.test = function() {
        console.log('hey')
      }
    },
    template: require('./nav-template.html')
  });
};
