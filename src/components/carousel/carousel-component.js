'use strict';

module.exports = function(app){
  app.component('cptCarousel', {
    controller: 'CarouselController',
    template: require('./carousel-template.html'),
  });
};
