'use strict';

module.exports = function(app) {
  require('./nav-component')(app);
  require('./nav-controller')(app);
};
