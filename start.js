module.exports = function() {

	// setup

	var env             = process.env.NODE_ENV || 'dev';
	var port            = process.env.PORT || 8080;
	var express         = require('express');
	var app             = express();

	// configuration

	app.use(express.static(__dirname + "/public"));

	// routes

	require('./app/routes.js')(app);

	// launch

	app.listen(port, function () {
	  console.log('%s listening at port %s', app.name, port);
	});

};