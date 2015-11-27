var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	session = require('express-session');

module.exports = function () {
	var app = express();
	
	//logger
	app.use(morgan('dev'));
	
	//body-parser
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	
	//session
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));
	
	//routes
	require('../routes/user.route')(app);
	require('../routes/delivery.route')(app);
	
	return app;
};