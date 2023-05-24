const express = require("express");
const app = express();
const port = 4000;

require("./db.js")();

function logger(req, res, next) {
	console.log(`${new Date().toISOString()}: ${req.originalUrl}`);
	next();
}

/* Middleware */
app.use(require("cors")());
app.use(express.urlencoded({extended: 1})); // Parse x-www-form-urlencoded
app.use(express.json()); // Parse json
app.use(logger);
app.use("/users", require("./routes/user.js"));
app.use(/\/(foods|products)/, require("./routes/foods.js"));
//app.use(/\/(chats|conversations)/, chats_r);

app.get("/", (req, res) => {
	res.send("Backend");
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
