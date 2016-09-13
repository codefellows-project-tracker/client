'use strict';

module.exports = function(app) {
  require('./nav')(app);
  require('./signin')(app);
  require('./signup')(app);
};
