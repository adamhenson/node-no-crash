var fs = require('fs');

// Respond with JSON
var jsonResponse_ = function(res, msg){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  res.end(JSON.stringify({ 'message' : msg }));
};

/**
 *
 * Export the route module
 *
 */
module.exports = function(app) {

  app.get('/', function (req, res) {

    jsonResponse_(res, 'welcome home.');

  });

  app.get('/throw', function (req, res) {

    fs.readFile('somefile.txt', function (err, data) {
      if (err) throw err;
      else jsonResponse_(res, "you shouldn't be seeing this.");
    });

  });

};