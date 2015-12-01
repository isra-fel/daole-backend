var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var delivery = new Schema({
	company: {
		type: String,
		required: 'Company is required',
		trim: true
	},
	deliveryId: {
		type: String,
		required: 'Delivery ID is required',
		trim: true
	},
	alias: {
		type: String,
		trim: true,
		default: ''
	},
	username: {
		type: String,
		ref: 'User',
		required: 'username is required'
	},
	isPinned: {
		type: Boolean,
		default: true
	},
	isReceived: {
		type: Boolean,
		default: false
	}
});

mongoose.model('Delivery', delivery);