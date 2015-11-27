var Delivery = require('mongoose').model('Delivery');

exports.create = function (req, res, next) {
	var delivery = new Delivery(req.body);
	delivery.username = req.params.username;
	delivery.deliveryId = req.params.deliveryId;
	delivery.save(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(delivery);
		}
	});
};

exports.update = function (req, res, next) {
	
};

exports.list = function (req, res, next) {
	Delivery.find({username: req.params.username}).exec(function (err, deliveries) {
		if (err) {
			return next(err);
		}
		res.json(deliveries).end();
	});
};