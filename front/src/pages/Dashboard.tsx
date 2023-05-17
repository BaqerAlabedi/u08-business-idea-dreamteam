//import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Map from "../components/Map";
import ProductShow from "../components/ProductShow";
import Search from "../components/Search";
import { Advertisement } from "../components/Advertisement";
export default function Dashboard() {


	return(
		<>
			<Map></Map>
			<Search name="Sök efter plats..." filter></Search>
			<section className="w-10/12 max-w-7xl mx-auto my-4 grid col-auto gap-5 lg:grid-cols-2 ">
				<ProductShow
					href={"/"}
					imgUrl={"https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_960_720.jpg"}
					title={"Maträtt rubrik"}
					description={"Lorem ipsum dolor sit amet. denna text är jättelång och kortas ner"}
					add={false}
					price={20}
					visible={true}
					distance={1.2}
				></ProductShow>
				<ProductShow
					href={"/"}
					imgUrl={"https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_960_720.jpg"}
					title={"Maträtt rubrik"}
					description={"Lorem ipsum dolor sit amet. denna text är jättelång och kortas ner"}
					add={false}
					price={20}
					visible={true}
					distance={1.2}
				></ProductShow>
				<Advertisement></Advertisement>
				<ProductShow
					href={"/"}
					imgUrl={"https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_960_720.jpg"}
					title={"Maträtt rubrik"}
					description={"Lorem ipsum dolor sit amet. denna text är jättelång och kortas ner"}
					add={false}
					price={20}
					visible={true}
					distance={1.2}
				></ProductShow>
			</section>
			<Link to={"/product/new"} className="my-4 flex flex-col items-center"><Button>Lägg upp egen annons</Button></Link>
		</>
	);
}