var user = require('../controllers/user.controller'),
	passport = require('passport');

module.exports = function (app) {
	app.route('/user')
	.post(user.signup)
	.put(passport.authenticate('local'), user.update);
	
	app.route('/user/signin')
	.post(passport.authenticate('local'), function (req, res) {
		res.status(200).end();
	});
	
	app.route('/user/signout')
	.post(passport.authenticate('local'), user.signout);
};