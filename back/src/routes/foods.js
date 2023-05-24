const router = require("express").Router();
const food = require("../controllers/foods.js");

router.get("/", food.find_all); // Get all foods

router.put("/create", (req, res) => {
	if (!Object.keys(req.body).length) {
		return res.status(400).json({
			error: "Req body can't be empty"
		});
	}
	food.make(req.body, res);
});

router.route("/:food_id")
	.get(food.find) // Get one food
	.put((req, res) => { // Update one food
	})
	.delete((req, res) => { // Delete one food
	});

module.exports = router;
