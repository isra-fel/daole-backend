var delivery = require('../controllers/delivery.controller'),
	passport = require('passport');

module.exports = function (app) {
	app.route('/delivery')
	.get(passport.authenticate(), delivery.list);
	
	app.route('/delivery/:deliveryId')
	.put(passport.authenticate(), delivery.create, delivery.update)
	.delete(passport.authenticate(), delivery.remove);
};