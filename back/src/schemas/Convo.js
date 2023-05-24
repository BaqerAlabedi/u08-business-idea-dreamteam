const mongoose = require("mongoose");

const conversation_schema = new mongoose.Schema({
	time: Number,
	buyer: mongoose.SchemaTypes.ObjectId,
	messages: [{
		sender: mongoose.SchemaTypes.ObjectId,
		message: String,
		timestamp: Date
	}]
});

module.exports = mongoose.model("Convo", conversation_schema);
