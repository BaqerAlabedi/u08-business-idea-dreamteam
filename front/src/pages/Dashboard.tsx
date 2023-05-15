//import Navbar from "../components/Navbar"
import Map from "../components/Map";
import ProductShow from "../components/ProductShow";
export default function Dashboard() {


	return(
		<>
			{/* <Navbar></Navbar>*/}
			<Map></Map>
			{/* Ta bort sen */}
			{/* <Search></Search>*/}
			<div className="m-3 mx-auto w-72 h-11 bg-teal-700 rounded"></div>
			<div className="grid col-auto gap-5 lg:grid-cols-2">
				<ProductShow></ProductShow>
				<ProductShow></ProductShow>
				<ProductShow></ProductShow>
				<ProductShow></ProductShow>
			</div>
			{/* Ta bort sen */}
			{/* <Button></Button>*/}
			<div className="m-3 mx-auto w-72 h-11 bg-teal-700 rounded"></div>
		</>
	);
}