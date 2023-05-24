const mongoose = require("mongoose");
//const uri = "mongodb+srv://test:<password>@cluster0.nikjolr.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb://127.0.0.1:27017/app";

module.exports = async function conn() {
	try {
		await mongoose.connect(uri);
		console.log("MongoDB connected");
	}catch(err) {
		console.error(err);
	}
};
