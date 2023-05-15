import Button from "./components/Button";
import ProductShow from "./components/ProductShow";
import Search from "./components/Search";

function App() {
	return (
		<>
			<h1 className="underline">Frontend</h1>
			<Button onClick={() => console.log("hello")} className="bg-red-700 text-white">Example btn</Button>
			<Search name="Sök efter plats" filter/>
			<ProductShow></ProductShow>
		</>
	);
}

export default App;
