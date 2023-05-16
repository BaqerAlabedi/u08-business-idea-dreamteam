
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import ProductShow from "./components/ProductShow";
import Search from "./components/Search";
import Product from "./pages/Product";

function App() {
	return (
		<>
			<Navbar/>
			<h1 className="underline">Frontend</h1>
			<Button onClick={() => console.log("hello")} className="w-32 h-8">Def+Class btn</Button>
			<Button onClick={() => console.log("hello")} red>Red btn</Button>
			<Button onClick={() => console.log("hello")} className="bg-red-700 text-white">Example btn</Button>
			<Search name="Sök efter plats" filter/>
			<ProductShow></ProductShow>
			<Product></Product>
		</>
	);
}

export default App;
