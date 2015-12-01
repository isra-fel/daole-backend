var delivery = require('../controllers/delivery.controller'),
	passport = require('passport'),
	user = require('../controllers/user.controller');

module.exports = function (app) {
	app.route('/delivery')
	.get(user.signin, delivery.list);
	
	app.route('/delivery/:deliveryId')
	.put(user.signin, delivery.create, delivery.update)
	.delete(user.signin, delivery.remove);
};