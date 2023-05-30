import express from "express";
import cors from "cors";
import {Router} from "./routes/routes";
import "./db/conn";

const port = 80;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router);


app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});