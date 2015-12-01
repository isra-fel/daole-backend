var Delivery = require('mongoose').model('Delivery');

exports.create = function (req, res, next) {
	Delivery.findOne({
		deliveryId: req.params.deliveryId
	}, function (err, exist) {
		if (err) {
			return next(err);
		}
		if (exist) {
			return next();
		}
		var delivery = new Delivery(req.body);
		delivery.username = req.user.username;
		delivery.deliveryId = req.params.deliveryId;
		delivery.save(function (err) {
			if (err) {
				return next(err);
			} else {
				res.json(delivery);
			}
		});
	});	
};

exports.update = function (req, res, next) {
	Delivery.findOneAndUpdate({
		deliveryId: req.params.deliveryId
	}, req.body, function (err, delivery) {
		if (err) {
			return next(err);
		} else {
			res.json(delivery);
		}
	});
};

exports.list = function (req, res, next) {
	Delivery.find({username: req.params.username}).exec(function (err, deliveries) {
		if (err) {
			return next(err);
		}
		res.json(deliveries).end();
	});
};

exports.remove = function (req, res, next) {
	req.user.remove(function (err) {
		if (err) {
			return next(err);
		}
		res.status(200).end();
	});
};