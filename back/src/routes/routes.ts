import express, { Request, Response } from "express";
import {readAllUsers, readOneUser, registerUser, loginUser, updateUser, deleteUser} from "../controllers/userController";
import {readAllFoods, readOneFood, createFood, updateFood, deleteFood} from "../controllers/foodController";

const router = express.Router();

router.get("/users", [], async (req : Request, res : Response) => {
	const result = await readAllUsers();

	if (result.error) {
		res.status(500).json({
			message: result.error,
			users: result.data
		});
	}
	else {
		res.status(200).json({
			users: result.data
		});
	}
});

router.post("/register", async (req : Request, res : Response) => {
	const result = await registerUser(req);
	console.log(result);
	if(!result) {
		res.status(500).json({
			message: "Error, could not create user"
		});
	}
	else {
		res.status(201).json({
			message: "User created successfully", uid: result
		});
	}
});

router.post("/login", async (req : Request, res : Response) => {
	const result = await loginUser(req);
	if(!result) {
		res.status(500).json({
			message: "Error, could not log in user, maybe user does not exist"
		});
	}
	else {
		res.status(201).json({
			message: "User logged in successfully", uid: result
		});
	}
});



router.get("/user", async (req : Request, res : Response) => {
	const user = await readOneUser(req);
	res.status(200).json({
		user: user
	});
});

router.patch("/user/update", async (req : Request, res : Response) => {
	if (req.body.uid.length != 24) return res.status(400).json({
		err: "ID not valid"
	});
	const user = await updateUser(req);
	res.status(200).json({
		user: user
	});
});

router.delete("/user/delete", async (req : Request, res : Response) => {
	if (req.body.uid.length != 24) return res.status(400).json({
		err: "ID not valid"
	});
	const user = await deleteUser(req);
	if (user) {
		console.log("Deleted", user);
		res.status(200).end(`Deleted: ${req.body.uid}`);
	}
	else res.status(404).json({err: `${req.body.uid} not found`});
});


//Foods

router.get("/foods", [], async (req : Request, res : Response) => {
	const result = await readAllFoods();
	if (result.error) {
		res.status(500).json({
			message: result.error
		});
	}
	else {
		res.status(200).json(
			result.data
		);
	}

});

router.put("/foods/create", async (req : Request, res : Response) => {
	const result = await createFood(req);
	if (result.error) {
		res.status(500).json({
			message: result.error
		});
	}
	else {
		res.status(200).json(
			result.data
		);
	}

});


router.get("/food", async (req : Request, res : Response) => {
	const result = await readOneFood(req);
	if (result.error) {
		res.status(500).json({
			message: result.error
		});
	}
	else {
		res.status(200).json(
			result.data
		);
	}
});

router.patch("/foods/update", async (req : Request, res : Response) => {
	const result = await updateFood(req)
	if (result.error) {
		res.status(500).json({
			message: result.error
		});
	}
	else {
		res.status(200).json(
			result.data
		);
	}
});

router.delete("/foods/delete", async (req : Request, res : Response) => {
	const result = await deleteFood(req);
	if (result.error) {
		res.status(500).json({
			message: result.error
		});
	}
	else {
		res.status(200).json(
			result.data
		);
	}
});

export {router as Router};