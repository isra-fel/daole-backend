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
	res.status(200).send('sign out ok').end();
};

/**
 * Middleware that makes sure req.user is avaliable, otherwise return 401 Unauthorized.
 * Be sure to prepend it before any middlewares that need authentication.
 * @param  {any} req
 * @param  {any} res
 * @param  {any} next
 */
exports.signin = function (req, res, next) {
	if (req.user) {
		return next();
	} else {
		res.status(401).send('please signin first').end();
	}
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