import { Link } from "react-router-dom";
import Button from "../components/Button";

function Index() {
	return(
		<div className="absolute top-0 flex items-center w-screen h-screen bg-cover bg-center bg-index">
			<section className="mx-auto w-72 h-5/6 place-content-around lg:grid-cols-1 lg:justify-items-stretch grid grid-rows-1 lg:w-5/6 lg:place-content-start ">
				<div className="lg:place-self-end lg:self-start lg:w-3/6">
					<h1 className="lg:w-96 text-3xl my-4">Grannskaps<b>Rätten</b></h1>
					<p className="lg:w-96">GrannskapsRätten hjälper dig att minska matsvinnet genom att knyta samman människor i ditt närområde. </p>
				</div>
				<Link to={"/register"} className="lg:justify-self-start"><Button>Registrera dig <b>idag</b></Button></Link>
			</section>
		</div>
	);
}

export default Index;