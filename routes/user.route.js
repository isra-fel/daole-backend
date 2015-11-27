var user = require('../controllers/user.controller');

module.exports = function (app) {
	app.route('/user/:username').put(user.create);
};