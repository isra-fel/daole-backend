var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: String,
	password: String,
	email: String,
	deliveries: [{type: Schema.Types.ObjectId, ref: 'Delivery'}]
});

mongoose.model('User', UserSchema);