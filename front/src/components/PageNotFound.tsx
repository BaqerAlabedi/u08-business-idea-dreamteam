import Button from "./Button";
import { Link } from "react-router-dom";

function PageNotFound () {
	return (
		<>
			<div className="flex flex-col justify-around items-center self-center h-96 mt-20">
				<h1 className="text-9xl">404</h1>
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-2xl">Oops! Den här sidan kunde inte hittas..</h2>
					<h4>Länken kanske är trasig</h4>
				</div>
				<Link to={"/"}><Button>Go back home</Button></Link>
			</div>
		</>
	);
}

export default PageNotFound;