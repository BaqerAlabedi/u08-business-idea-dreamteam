const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

function newdate() {
	let d = new Date();
	return [d.getTime(), d.toISOString()];
}

const food_schema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		default: new mongoose.Types.ObjectId(),
		immutable: 1
	},
	title: {type: String, required: 1},
	desc: String,
	location: {type: [Number, Number], required: 1},
	free: Boolean,
	price: {type: String, required: 1}, // If false free=true
	img: {type: String, required: 1},
	expire: [String, Number],
	tags: [String],
	is_sold: {
		type: Boolean,
		default: false
	}
});
const user_schema = new mongoose.Schema({
	first_name: {type: String, required: 1},
	surname: String,
	email: {type: String, required: 1, lowercase: 1, unique: 1},
	password: {type: String, required: 1},
	address: String,
	img: String,
	foods: [food_schema],
	created_at: {
		type: [mongoose.Schema.Types.Mixed],
		default: newdate,
		immutable: 1
	},
	updated__at: {
		type: [mongoose.Schema.Types.Mixed],
		default: newdate,
	}
});
// newdate() would exec when module first loaded (https://github.com/Automattic/mongoose/issues/3675)

// Middlewear (Model hook)
user_schema.pre("save", async function(next) {
	try {
		salt = await bcrypt.genSalt(9)
		this.password = await bcrypt.hash(this.password, salt);
		next();
	}catch (err) {
		next(err);
	}
});

module.exports = mongoose.model("User", user_schema); // Looks for users collection
