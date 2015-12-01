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
		trim: true
	},
	username: {
		type: String,
		ref: 'User',
		required: 'username is required'
	},
	isPinned: {
		type: Boolean,
		required: 'isPinned is required'
	},
	isReceived: {
		type: Boolean,
		required: 'isPinned is required'
	}
});

mongoose.model('Delivery', delivery);