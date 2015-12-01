var user = require('../controllers/user.controller'),
	passport = require('passport');

module.exports = function (app) {
	app.route('/user')
	.post(user.signup)
	.put(user.signin, user.update);
	
	app.route('/user/signin')
	.post(passport.authenticate('local'), function (req, res) {
		res.status(200).send('sign in ok').end();
	});
	
	app.route('/user/signout')
	.get(user.signin, user.signout);
};