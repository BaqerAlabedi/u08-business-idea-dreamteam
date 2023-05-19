import mongoose from "mongoose";
import {foodSchema} from "./foods";

interface IUser {
	first_name : string,
	surname: string,
	email: string,
	password: string,
	address?: string,
	img?: string
}

interface userModelInterface extends mongoose.Model<UserDoc> {
	build(attr: IUser): UserDoc
}

interface UserDoc extends mongoose.Document {
	first_name : string,
	surname: string,
	email: string,
	password: string,
	address?: string,
	img?: string
}

const userSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	surname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: false
	},
	img: {
		type: String,
		required: false
	},
	foods: [foodSchema]

});

userSchema.statics.build = (attr: IUser) => {
	return new User(attr);
};

const User = mongoose.model<UserDoc, userModelInterface>("User", userSchema);

User.build({
	first_name: "John",
	surname: "Doe",
	email: "john@example.com",
	password: "asdkiwroi12b132984gbokqnweninin28h3",
	address: "Jump Street",
	img: "john.jpg"
});

export { User };