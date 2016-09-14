'use strict';

module.exports = function(app) {
  require('./carousel-component')(app);
  require('./carousel-controller')(app);
};
