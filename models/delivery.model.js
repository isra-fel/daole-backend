var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var delivery = new Schema({
	company: String,
	deliveryId: String,
	username: {type: String, ref: 'User'},
	isPinned: Boolean,
	isReceived: Boolean
});

mongoose.model('Delivery', delivery);