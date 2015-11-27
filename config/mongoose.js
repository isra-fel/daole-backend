var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function () {
	var db = mongoose.connect(config.db);
	require('../models/user.model');
	require('../models/delivery.model');
	return db;
};