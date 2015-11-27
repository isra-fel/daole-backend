var delivery = require('../controllers/delivery.controller');

module.exports = function (app) {
	app.route('/user/:username/delivery').get(delivery.list);
	
	app.route('/user/:username/delivery/:deliveryId')
	.put(delivery.create, delivery.update);
};