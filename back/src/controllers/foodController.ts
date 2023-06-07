import { User } from "../models/user";
import { Request } from "express";
const url = "https://u08.onrender.com/";
//const url = "http://localhost:4000/";

const readAllFoods = async () => {
	try {
		const foods = await User.find(
			{foods: {$exists: true, $not: {$size: 0}}},
			"foods"
		);
		if(!foods) {
			throw new Error("Foods not found");
		}
		return {error: null, data: foods};
	}catch(error: unknown) {
		console.log(error);
		return {error: "Foods not found", data: null};
	}
};

const readOneFood = async (fid:string) => {
	try {
		const food = await User.findOne(
			{"foods._id": fid},
			{"foods.$": 1, _id: 0, email: 1}
		);
		if(food){
			// food.foods[0]["user_email"] = "food.email";
			console.log("Found", food);
			return {error: null, data: food};
		}
		else {
			throw new Error("Could not find food");
		}
	}catch(error: unknown) {
		return {error: error, data: null};
	}
};

const createFood = async (data: Request) => {
	try {
		const uid = data.body.uid;
		delete data.body.id;
		if (data.file) data.body.img = url + "image/" + data.file.filename;

		const food = await User.findOneAndUpdate(
			{_id: uid}, {$push: {foods: data.body}}, {new: true}
		);
		if (food) {
			console.log("Updated", food);
			return {error: null, data: "Created successful"};
		}
		else return {error: "ID not found"};

	}catch(error: unknown) {
		return {error: "Could not create food", data: null};
	}
};


const updateFood = async (data: Request) => {
	try {
		const insert = { _id: data.body.fid, title: data.body.title, desc: undefined, location: data.body.location, price: undefined, img: data.body.img, expire: undefined, tags: undefined, is_sold: undefined};
		if (data.body.desc) insert.desc = data.body.desc;
		if (data.body.price) insert.price = data.body.price;
		if (data.body.expire) insert.expire = data.body.expire;
		if (data.body.tags) insert.tags = data.body.tags;
		if (data.body.is_sold) insert.is_sold = data.body.is_sold;

		if (insert) {
			const food = await User.findOneAndUpdate({"foods._id": data.body.fid}, {$set: {"foods.$": insert}}, {new: true});
			console.log("Updated", food);
			return {error: null, msg: "Food updated successfully"};
		}
		else {
			throw new Error("Could not update food");
		}

	}catch(error: unknown) {
		return {error: "Could not update food", data: null};
	}
};


const deleteOneFood = async (data: Request) => {
	try {
		const {fid, uid} = data.body;
		const user = await User.findById(uid);
		if (!user) {
			throw new Error("User not found");
		}

		const foodIndex = user.foods.findIndex(food => food._id.toString() === fid);
		if (foodIndex === -1) {
			throw new Error("Food not found");
		}
		const deletedFood = user.foods.splice(foodIndex, 1)[0];

		await user.save();
		console.log("Deleted", deletedFood);
		return {error: null, msg: "Food deleted successfully"};

	}catch (error: unknown) {
		return {error: error, data: null};
	}
};

export {readAllFoods, createFood, readOneFood, updateFood, deleteOneFood};
