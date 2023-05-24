import { User, UserDoc } from "../models/user";
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
	const user = await User.findById(data.body.uid, {first_name: true, surname: true, email: true, foods: true,_id: false});
	return user;
};

const registerUser = async (data : Request) => {
	try {
		const {first_name, surname, email, password_confirmation} = data.body;
		let password : string = data.body.password;
		if(password == password_confirmation){
			return hashPassword(password)
				.then((hashedPassword : string) => {
					password = hashedPassword;
					const user = User.build({first_name, surname, email, password});
					user.save();
					return user._id;
				});
		}

	} catch(error) {
		return { error: error};
	}
};


const loginUser = async (data: Request) => {

	const {email, password} = data.body;
	const result = await User.findOne({email: email});
	console.log(result);
	if(result != null){
		return comparePassword(password, result.password)
			.then((res : boolean) => {
				if(res)
				{
					return result._id;
				}
			});
	}

	return {error: "Unable to log in", data: null}
};



const updateUser = async (data: Request) => {
	const insert = {first_name: "", surname: "", address: "", img: ""};
	if (data.body.first_name) insert.first_name = data.body.first_name;
	if (data.body.surname) insert.surname = data.body.surname;
	if (data.body.address) insert.address = data.body.address;
	if (data.body.img) insert.address = data.body.img;
	if (insert) {
		const usr = await User.findOneAndUpdate({_id: data.body.uid}, insert, {new: true});
		return usr;
	}
};

//DELETES EVERYTHING IN USERS COLLECTION 🥵🥵🥵🥵🥵
const deleteUser = async (data: Request) => {
	try {
		const user = await User.findByIdAndDelete(data.body.uid);
		return user;
	}catch(err) {
		console.log(err);
	}
};



export {readAllUsers, registerUser, readOneUser, loginUser, updateUser, deleteUser};