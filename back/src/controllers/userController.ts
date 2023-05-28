import { User } from "../models/user";
import { Request } from "express";
import { comparePassword, hashPassword } from "./hash";
import * as EmailValidator from "email-validator";

const readAllUsers = async () => {
	try {
		const users = await User.find({});
		if(!users) {
			throw new Error("User not found");
		}
		return {error: null, data: users};
	} catch (error: unknown) {
		if(error instanceof Error){
			return { error: { message: error.message}, data: null};
		}
		else {
			return { error: { message: "Unknown error"}, data: null};
		}
	}
};

const readOneUser = async (data: Request) => {
	try{
		if(!data.body) {
			throw new Error("Body is invalid");
		}
		if (!data.body.uid) {
			throw new Error("Invalid User ID");
		}
		if (data.body.uid.length != 24)
		{
			throw new Error("Invalid User ID");
		}
		const user = await User.findById(data.body.uid, {first_name: true, surname: true, email: true, foods: true,_id: false});
		return {error: null, data: user};
	} catch (error: unknown) {
		if(error instanceof Error){
			return { error: { message: error.message}, data: null};
		}
		else {
			return { error: { message: "Unknown error"}, data: null};
		}
	}
};

const registerUser = async (data : Request) => {
	try {
		const {first_name, surname, email, password_confirmation} = data.body;
		let password : string = data.body.password;
		if(!data.body){
			throw new Error("Body is empty");
		}
		if(!first_name){
			throw new Error("first_name is invalid");
		}
		if(!surname){
			throw new Error("surname is invalid");
		}
		if(!email){
			throw new Error("email is invalid");
		}
		if(!EmailValidator.validate(email)){
			throw new Error("email is invalid");
		}
		if(!data.body.password){
			throw new Error("password is invalid");
		}
		if(!password_confirmation){
			throw new Error("password confirmation is invalid");
		}
		if(password !== password_confirmation){
			throw new Error("passwords do not match");
		}
		if(password === password_confirmation){
			return hashPassword(password)
				.then((hashedPassword : string) => {
					password = hashedPassword;
					const user = User.build({first_name, surname, email, password});
					user.save();
					const uid = user._id;
					return {error: null, uid: uid};
				});
		}

	} catch(error: unknown) {
		if(error instanceof Error){
			return { error: { message: error.message}, data: null};
		}
		else {
			return { error: { message: "Unknown error"}, data: null};
		}
	}
};


const loginUser = async (data: Request) => {
	try{
		const {email, password} = data.body;
		if(!email){
			throw new Error("email is invalid");
		}
		if(!EmailValidator.validate(email)){
			throw new Error("email is invalid");
		}
		if(!password){
			throw new Error("password is invalid");
		}
		const user = await User.findOne({email: email});
		let uid = "";
		if(!user)
		{
			throw new Error("User does not exist");
		}
		if(user){
			await comparePassword(password, user.password)
				.then((res : boolean) => {
					if(res)
					{
						uid = user._id;
					}
				});
		}
		if(!uid)
		{
			throw new Error("Password does not match");
		}
		return {error: null, uid: uid};
	} catch(error: unknown) {
		if(error instanceof Error){
			return {error: { message: error.message}, data: null};
		}
		else {
			return { error: { message: "Unknown error"}, data: null};
		}
	}
};



const updateUser = async (data: Request) => {
	try {
		const insert = {first_name: "", surname: "", address: "", img: ""};
		if (data.body.first_name) insert.first_name = data.body.first_name;
		if (data.body.surname) insert.surname = data.body.surname;
		if (data.body.address) insert.address = data.body.address;
		if (data.body.img) insert.address = data.body.img;
		if(data.body.uid.length != 24)
		{
			throw new Error("User ID is invalid");
		}
		if (insert) {
			const usr = await User.findOneAndUpdate({_id: data.body.uid}, insert, {new: true});
			return {error: null, data: usr};
		}
	} catch (error: unknown) {
		if(error instanceof Error){
			return {error: { message: error.message}, data: null};
		}
		else {
			return { error: { message: "Unknown error"}, data: null};
		}
	}
};

const deleteUser = async (data: Request) => {
	try {
		if(!data.body.uid){
			throw new Error("Invalid User ID");
		}
		if(data.body.uid.length != 24)
		{
			throw new Error("Invalid User ID");
		}
		await User.findByIdAndDelete(data.body.uid);
		return {error: null, data: "User deleted"};
	}catch(error: unknown) {
		if(error instanceof Error){
			return {error: { message: error.message}, data: null};
		}
		else {
			return { error: { message: "Unknown error"}, data: null};
		}
	}
};



export {readAllUsers, registerUser, readOneUser, loginUser, updateUser, deleteUser};