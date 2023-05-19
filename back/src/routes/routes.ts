import express, { Request, Response } from "express";
import {readAllUsers, readOneUser, registerUser, loginUser} from "../controllers/userController"

const router = express.Router();

router.get("/users/", [], async (req : Request, res : Response) => {
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
	if(result.error) {
		res.status(500).json({
			message: result.error
		});
	}
	else {
		res.status(201).json({
			message: "User created successfully"
		});
	}
});

router.post("/login", async (req : Request, res : Response) => {
	const result = await loginUser(req);
	if(result.error) {
		res.status(500).json({
			message: result.error
		});
	}
	else {
		res.status(201).json({
			message: "User created successfully"
		});
	}
});



router.get("/users/:userID", async (req : Request, res : Response) => {
	const user = await readOneUser(req);
	res.status(200).json({
		user: user
	});
});

export {router as userRouter};