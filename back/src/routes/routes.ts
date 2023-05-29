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

router.put("/foods/create", key_check(["uid", "title", "desc", "location", "img", "expire"]),
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

router.patch("/foods/update", key_check(["fid", "title", "location", "img"]),
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

router.delete("/foods/delete", key_check(["uid", "fid"]),
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

export {router as Router};
