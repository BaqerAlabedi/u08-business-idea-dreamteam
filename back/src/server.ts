import express from "express";
import cors from "cors";
import {Router} from "./routes/routes";
import "./db/conn";

const port = process.env.DB_PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router);


app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});