var User = require('mongoose').model('User'),
	passport = require('passport');

exports.signup = function (req, res, next) {
	var user = new User(req.body);
	user.save(function (err) {
		if (err) {
			return next(err);
		} else {
			req.login(user, function (err) {
				if (err) {
					return next(err);
				}
				return res.json(user);
			});
		}
	});
};

exports.signout = function (req, res) {
	req.logout();
	res.end();
};

exports.signin = function (req, res, next) {
	User.findOne({
		username: req.body.username
	}, function (err, user) {
		if (err) {
			return next(err);
		} else {
			if (user.authenticate(req.body.password)) {
				req.login(user, function (err) {
					if (err) {
						return next(err);
					}
					return res.json(user);
				});
			}
		}
	});
};

exports.update = function (req, res, next) {
	User.findOneAndUpdate({
		username: req.user.username
	}, req.body, function (err, user) {
		if (err) {
			return next(err);
		} else {
			res.json(user);
		}
	});
};