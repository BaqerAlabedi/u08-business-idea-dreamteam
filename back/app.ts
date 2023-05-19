const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req:any, res:any) => {
	res.send("Backend");
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});