'use strict';

var HeaderParseHandler = require(process.cwd() + '/app/controllers/headerParseHandler.server.js');

module.exports = function (app, db) {
  
  var headerParseHandler = new HeaderParseHandler(db);
  
  app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
      console.log("Getting homepage...");
    });
    
  app.route('/api/whoami')
    .get(headerParseHandler.getHeader);
};
