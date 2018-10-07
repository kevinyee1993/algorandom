const algorithmRoutes = require('./algorithm_routes');


module.exports = function(app, db) {
  algorithmRoutes(app, db);
  // Other route groups could go here, in the future
};
