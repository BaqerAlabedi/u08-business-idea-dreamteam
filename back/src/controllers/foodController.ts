import { User } from "../models/user";
import { Request } from "express";

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

const readOneFood = async (data: Request) => {
	try {
		const food = await User.findOne(
			{foods: {$elemMatch: {_id: data.body.fid}}},
			{ "foods.$": 1, _id: 0}
		);
		if(food){
			return {error: null, data: food};
		}
		else {
			throw new Error("Could not find food")
		}
	}catch(error: unknown) {
		return {error: error, data: null};
	}
};


const createFood = async (data: Request) => {
	try {
		const fid = data.body.uid;
		delete data.body.id;
		if (data.body) {
			const food = await User.findOneAndUpdate(
				{_id: fid}, {$push: {foods: data.body}}, {new: true}
			);
			console.log("Updated", food);
			return {error: null, data: food};
		}
		else {
			throw new Error("Could not create food")
		}

	} catch(error: unknown) {
		return {error: "Could not create food", data: null};
	}

};


const updateFood = async (data: Request) => {
	try {
		const insert = { _id: undefined, title: undefined, desc: undefined, location: undefined, price: undefined, img: undefined, expire: undefined, tags: undefined, is_sold: undefined};
		if (data.body.fid) insert._id = data.body.fid;
		if (data.body.desc) insert.desc = data.body.desc;
		if (data.body.price) insert.price = data.body.price;
		if (data.body.expire) insert.expire = data.body.expire;
		if (data.body.tags) insert.tags = data.body.tags;
		if (data.body.is_sold) insert.is_sold = data.body.is_sold;
		insert.title = data.body.title;
		insert.location = data.body.location;
		insert.img = data.body.img;

		if (insert) {
			const food = await User.findOneAndUpdate({"foods._id": data.body.fid}, {$set: {"foods.$": insert}}, {new: true});
			return {error: null, data: food};
		}
		else {
			throw new Error("Could not update food");
		}
	}
	catch(error: unknown) {
		return {error: "Could not update food", data: null}
	}
};


//DELETES EVERYTHING IN USERS COLLECTION 🥵🥵🥵🥵🥵
const deleteFood = async (data: Request) => {
	try {
		const food = await User.findOneAndDelete(data.body.fid);
		console.log(food);
		if(food){
			return {error: null, data: food};
		}
		else {
			throw new Error("Could not delete food")
		}
	}
	catch(error: unknown) {
		return {error: error, data: null}
	}
};



export {readAllFoods, createFood, readOneFood, updateFood, deleteFood};