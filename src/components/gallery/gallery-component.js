'use strict';

module.exports = function(app) {
  app.component('cptGallery', {
    controller: function() {
      this.lol = true;
    },
    template: require('./gallery-template.html')
  });
};
