import express, { Request, Response } from "express";
import {readAllUsers, readOneUser, registerUser, loginUser, updateUser, deleteUser} from "../controllers/userController";
import {readAllFoods, readOneFood, createFood, updateFood, deleteOneFood} from "../controllers/foodController";

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
	if(result) {
		if(result.error) {
			res.status(500).json({
				error: result.error
			});
		}
		else {
			res.status(201).json({
				message: "User created successfully", uid: result.uid
			});
		}
	}

});

router.post("/login", async (req : Request, res : Response) => {
	const result = await loginUser(req);
	if(result) {
		if(result.error){
			res.status(500).json({
				error: result.error
			});
		}
		else {
			res.status(201).json({
				message: "User logged in successfully", uid: result.uid
			});
		}
	}
});



router.get("/user", async (req : Request, res : Response) => {
	const result = await readOneUser(req);

	if(result) {
		if(result.error){
			res.status(500).json({
				error: result.error
			});
		}
		else {
			res.status(200).json({
				data: result.data
			});
		}
	}

});

router.patch("/user/update", async (req : Request, res : Response) => {
	const result = await updateUser(req);
	if(result) {
		if(result.error){
			res.status(500).json({
				error: result.error
			});
		}
		else {
			res.status(200).json({
				data: result.data
			});
		}
	}
});

router.delete("/user/delete", async (req : Request, res : Response) => {
	const user = await deleteUser(req);
	if(user) {
		if(user.error){
			res.status(500).json({
				error: user.error
			});
		}
		else {
			res.status(200).json({
				message: user.data
			});
		}
	}
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
	const result = await updateFood(req);
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
	const result = await deleteOneFood(req);
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