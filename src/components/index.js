'use strict';

module.exports = function(app) {
  require('./nav')(app);
  require('./signin')(app);
  require('./signup')(app);
  require('./gallery')(app);
  require('./carousel')(app);
  require('./project-form')(app);
  require('./project')(app);
};
