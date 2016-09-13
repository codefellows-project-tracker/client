'use strict';

module.exports = function(app){
  app.component('cptNav', {
    controller: function() {
      this.isCollapsed = false;
    },
    template: require('./nav-template.html')
  });
};
