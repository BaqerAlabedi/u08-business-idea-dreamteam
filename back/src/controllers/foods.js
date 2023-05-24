const User = require("../schemas/User.js");

async function make(body, res) {
	const id = body.id;
	delete body.id
	//if (body.desc) insert.desc = body.desc;
	if (body) {
		const usr = await User.findOneAndUpdate(
			{_id: id}, {$push: {foods: body}}, {new: true}
		);
		console.log("Updated", usr);
		res.status(201).end("Food added");
	}
	else res.status(400).json({err: "Nothing to update"});
}

async function find_all(req, res) {
	try {
		const data = await User.find(
			{foods: {$exists: true, $not: {$size: 0}}},
			"foods -_id"
		);
		if (data) {
			res.status(200).json(data);
		}
		else res.status(404).json({err: "No foods in db"});
	}catch(err) {
		console.log(err);
	}
}

async function find({params: {food_id}}, res) {
	try {
		let data = await User.findOne( // Bad, returns all foods
			{foods: {$elemMatch: {_id: food_id}}},
			"foods -_id"
		);
		if (data) {
			data.foods.map((food) => { // Quick fix :/
				if (food._id == food_id) data = food;
			});
			res.status(200).json(data);
		}
		else res.status(404).json({err: `${food_id} not found`});
	}catch(err) {
		console.log(err);
	}
}

module.exports = {make, find_all, find};
