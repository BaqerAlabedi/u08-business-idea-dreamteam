const router = require("express").Router();
const chat = require("../controllers/chat.js");

router.get("/:food_id", (req, res) => { // Get chat msgs for food
});
router.put("/:food_id/", (req, res) => { // Update sold status
})

router.post("/", (req, res) => {
});

router.route("/:food_id/:user_id")
	.get((req, res) => { // Get chat msgs?
	})
	.post((req, res) => { // Start new chat
	})
	.put((req, res) => { // Send chat msgs
	});

module.exports = router;
