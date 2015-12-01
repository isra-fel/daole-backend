/* global Buffer */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');

var UserSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: 'Username is required',
		trim: true
	},
	password: {
		type: String,
		validate: [
			function (password) {
				return password && password.length > 6;
			}, 'Password should be longer'
		]
	},
	email: {
		type: String,
		match: [/.+\@.+\..+/, 'Please fill a valid e-mail address']
	},
	deliveries: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Delivery'
		}
	],
	created: {
		type: Date,
		default: Date.now()
	},
	salt: {
		type: String
	}
});

UserSchema.pre('save', function (next) {
	if (this.password) {
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}
	next();
});

UserSchema.methods.hashPassword = function (password) {
	return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.methods.authenticate = function (password) {
	return this.password === this.hashPassword(password);
};

UserSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

mongoose.model('User', UserSchema);