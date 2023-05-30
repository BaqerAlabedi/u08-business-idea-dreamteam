import mongoose, {ConnectOptions} from "mongoose";
require("dotenv").config();


const DB = process.env.DB_URL;

if(DB){
	mongoose.connect(DB, {
		useNewUrlParser: true,
	} as ConnectOptions);
}
else {
	console.log("ENV variable undefined");
}
