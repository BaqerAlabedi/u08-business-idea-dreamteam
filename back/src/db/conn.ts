// import mongoose, {ConnectOptions} from "mongoose";
// require("dotenv").config();


// const DB = process.env.DB_URL;

// if(DB){
// 	mongoose.connect(DB, {
// 		useNewUrlParser: true,
// 	} as ConnectOptions);
// }
// else {
// 	console.log("ENV variable is undefined");
// }
import mongoose, {ConnectOptions} from "mongoose";

const DB = "mongodb://localhost:27017/GrannskapsRatten";

mongoose.connect(DB, {
	useNewUrlParser: true,
} as ConnectOptions);