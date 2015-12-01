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
				res.status(201).write('Created').end();
			}
		});
	});	
};

exports.update = function (req, res, next) {	
	Delivery.findOneAndUpdate({
		deliveryId: req.params.deliveryId
	}, (function extractUpdateBody(body) {
		var up = {};
		if (body.hasOwnProperty('alias')) {
			up.alias = body.alias;
		}
		if (body.hasOwnProperty('isPinned')) {
			up.isPinned = body.isPinned;
		}
		if (body.hasOwnProperty('isReceived')) {
			up.isReceived = body.isReceived;
		}
		return up;
	})(req.body), function (err, delivery) {
		if (err) {
			return next(err);
		} else {
			res.status(200).write('OK').end();
		}
	});
};

exports.list = function (req, res, next) {
	Delivery.find({username: req.params.username}).exec(function (err, deliveries) {
		if (err) {
			return next(err);
		}
		res.status(200).json(deliveries).end();
	});
};

exports.remove = function (req, res, next) {
	//TODO: 
	// req.user.remove(function (err) {
	// 	if (err) {
	// 		return next(err);
	// 	}
	// 	res.status(200).end();
	// });
};