import mongoose, {ConnectOptions} from "mongoose";

const DB = "mongodb://localhost:27017/GrannskapsRatten";

mongoose.connect(DB, {
	useNewUrlParser: true,
} as ConnectOptions);