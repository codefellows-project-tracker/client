'use strict';

module.exports = function(app) {
  require('./auth-controller')(app);
  require('./project-controller')(app);
};
