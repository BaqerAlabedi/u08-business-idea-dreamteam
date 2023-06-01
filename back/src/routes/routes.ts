import express, { Request, Response, NextFunction } from "express";
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



router.post("/user", async (req : Request, res : Response) => {
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

router.post("/user/delete", async (req : Request, res : Response) => {
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


/* Foods */

// Middleware
router.use("/foods", (req : Request, res : Response, next : NextFunction) => {
	if (req.method == "GET") return next();
	if (!Object.keys(req.body).length) {
		return res.status(400).json({
			err: "Req body can't be empty"
		});
	}
	next();
});

function key_check(keys:string[]) {
	return function (req : Request, res : Response, next : NextFunction) {
		for (const key of keys) {
			if (!Object.keys(req.body).includes(key)) return res.status(400).json({
				err: `Req missing field '${key}'`
			});
		}
		const bad_id = () => res.status(400).json({err: "ID not valid"});
		if (req.body.uid && req.body.uid.length != 24) return bad_id();
		if (req.body.fid && req.body.fid.length != 24) return bad_id();
		if (req.params.fid && req.params.fid.length != 24) return bad_id();
		console.log("Req fields pass");
		next();
	};
}

// Routes
router.get("/foods", async (req : Request, res : Response) => {
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

router.put("/food/create-OFF", key_check(["uid", "title", "desc", "location", "img", "expire"]),
	async (req : Request, res : Response) => {
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

router.get("/food/:fid", key_check([]), async (req : Request, res : Response) => {
	const result = await readOneFood(req.params.fid);
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

router.patch("/food/update", key_check(["fid", "title", "location", "img"]),
	async (req : Request, res : Response) => {
		const result = await updateFood(req);
		if (result.error) {
			res.status(500).json({
				message: result.error
			});
		}
		else {
			res.status(200).json({
				message: result.msg
			});
		}
	});

router.post("/food/delete", key_check(["uid", "fid"]),
	async (req : Request, res : Response) => {
		const result = await deleteOneFood(req);
		if (result.error) {
			res.status(500).json({
				message: result.error
			});
		}
		else {
			res.status(200).json({
				message: result.msg
			});
		}
	});

import multer from "multer";
const upload = multer({dest: "images/"});

router.put("/food/create", upload.single("img"), (req, res) => {
	console.log("MULTER");
	console.log("FILE", req.file);
	console.log("BODY", req.body);
});

export {router as Router};