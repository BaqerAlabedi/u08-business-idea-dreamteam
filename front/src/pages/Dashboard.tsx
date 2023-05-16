//import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Map from "../components/Map";
import ProductShow from "../components/ProductShow";
import Search from "../components/Search";
export default function Dashboard() {


	return(
		<>
			<Map></Map>
			<Search name="Sök efter plats..." filter></Search>
			<section className="w-10/12 max-w-7xl mx-auto my-4 grid col-auto gap-5 lg:grid-cols-2 ">
				<ProductShow></ProductShow>
				<ProductShow></ProductShow>
				<ProductShow></ProductShow>
				<ProductShow></ProductShow>
			</section>
			<Link to={"/product/new"} className="my-4 flex flex-col items-center"><Button>Lägg upp egen annons</Button></Link>
		</>
	);
}