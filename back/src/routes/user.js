const router = require("express").Router();
const user = require("../controllers/user.js");

router.get("/", user.find_all);

router.post("/register", (req, res) => {
	if (!Object.keys(req.body).length) {
		return res.status(400).json({
			error: "Req body can't be empty"
		});
	}
	user.make(res, req.body);
});

router.post("/login", user.login);
router.patch("/update", user.update); // .put also works

router.route("/:id") // .route, different requests for same route
	.get(user.find)
	.delete(user.purge);

router.param("id", (req, res, next, id) => { // Param middleware
	console.log("VALIDATING...");
	setTimeout(() => {
		next();
		console.log("PASSED!");
	}, 3000);
});

module.exports = router;
