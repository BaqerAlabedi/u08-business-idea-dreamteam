import { User } from "../models/user";
import { Request } from "express";
import { comparePassword, hashPassword } from "./hash";

const readAllUsers = async () => {
	try {
		const users = await User.find({});
		if(!users) {
			throw new Error("User not found");
		}
		return {error: null, data: users};
	} catch (error: unknown) {
		if(error instanceof Error) {
			return {error: error, data: null};
		}
		else {
			return {error: "User not found", data: null};
		}
	}
};

const readOneUser = async (data: Request) => {
	const user = await User.findById(data.body.id);
	return user;
};

const registerUser = async (data : Request) => {
	try {
		const {first_name, surname, email, password_confirmation} = data.body;
		let password : string = data.body.password;
		if(password == password_confirmation){
			hashPassword(password)
				.then((hashedPassword : string) => {
					password = hashedPassword;
					const user = User.build({first_name, surname, email, password});
					user.save();
				});
		}

	} catch(error) {
		return { error: error};
	}
	return {error: null};
};

//Not working currently
const loginUser = async (data: Request) => {

	const {email, password} = data.body;
	const result = User.findOne({email: email});
	comparePassword(password, result[0].password)
		.then((res : boolean) => {
			if(res)
			{
				return {error: null, data: "User logged in"}
			}
		});
	return {error: "Unable to log in", data: null}
};




export {readAllUsers, registerUser, readOneUser, loginUser};