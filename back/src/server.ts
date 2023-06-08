import express from "express";
import cors from "cors";
import {Router} from "./routes/routes";
import "./db/conn";

<<<<<<< HEAD
const port = 80;

=======
const port = 4000;
>>>>>>> 852bb8136b881096319e067f37154c0c7bd97c9c
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router);


app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});