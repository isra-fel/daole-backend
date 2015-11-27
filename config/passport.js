var passport = require('passport'),
	mongoose = require('mongoose');

module.exports = function () {
	var User = mongoose.model('User');
	
	passport.serializeUser(function (user, done) {
		done(null, user.username);
	});
	passport.deserializeUser(function (username, done) {
		User.findOne({
			username: username
		}, '-password -salt', function (err, user) {
			done(err, user);
		});
	});
	
	require('./strategies/local')();
};