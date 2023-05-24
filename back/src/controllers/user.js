const User = require("../schemas/User.js");
const bcrypt = require("bcrypt");

async function make(res, body) {
	try {
		if (body.password === body.password_confirmed) {
			const data = await User.create({ // Eq to new User({}).save()
				first_name: body.first_name,
				surname: body.surname,
				email: body.email,
				password: body.password,
			});
			data.password = undefined;
			console.log("CREATED", data);
			res.status(201).json(data);
		}
		else throw {message: "Passwords does not match!"};
	}catch(err) {
		console.log(err.message);
		res.end(err.message);
	}
}

async function login({body}, res) {
	try {
		const data = await User.findOne({email: body.email});
		const is_match = await bcrypt.compare(body.password, data.password);
		if (is_match) {
			data.password = undefined;
			console.log("Loggin", data);
			res.status(200).json(data);
		}
	}catch(err) {
		console.log(err.message);
	}
}

async function find_all(req, res) {
	const data = await User.find();
	if (data) {
		res.status(200).json(data);
	}
	else res.status(404).json({err: "Collection is empty"});
}

async function find({params: {id}}, res) {
	if (id.length != 24) return res.status(400).json({
			err: "ID not valid"
	});
	try { // W/o trycatch App crashes if id format is invalid
		const data = await User.findById(id);
		if (data) {
			res.status(200).json(data);
		}
		else res.status(404).json({err: `${id} not found`});
	}catch(err) {
		console.log(err);
	}
}

async function update({body}, res) {
	if (body.id != 24) return res.status(400).json({
			err: "ID not valid"
	});
	const insert = {};
	if (body.first_name) insert.first_name = body.first_name;
	if (body.surname) insert.surname = body.surname;
	if (body.password) insert.password = body.password;
	if (body.address) insert.address = body.address;
	if (insert) {
		const usr = await User.findOneAndUpdate({_id: body.id}, insert, {new: true});
		console.log("Updated", usr);
		res.status(201).end("User information updated");
	}
	else res.status(400).json({err: "Nothing to update"});
}

async function purge({body: {id}}, res) {
	console.log("BODY", id);
	if (id.length != 24) return res.status(400).json({
			err: "ID not valid"
	});
	try {
		const data = await User.findByIdAndDelete(id);
		if (data) {
			console.log("Deleted", data);
			res.status(200).end(`Deleted: ${id}`);
		}
		else res.status(404).json({err: `${id} not found`});
	}catch(err) {
		console.log(err);
	}
}

module.exports = {make, login, find_all, find, update, purge};
