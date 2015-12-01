var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	passport = require('passport');

module.exports = function () {
	var app = express();
	
	//logger
	app.use(morgan('dev'));
	
	//static page
	app.use(express.static('views/public'));
	
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
	
	//passport
	app.use(passport.initialize());
	app.use(passport.session());
	
	//routes
	require('../routes/user.route')(app);
	require('../routes/delivery.route')(app);
	
	return app;
};