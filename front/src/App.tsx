import Button from "./components/Button";
import ProductShow from "./components/ProductShow";

function App() {
	return (
		<>
			<h1 className="underline">Frontend</h1>
			<Button onClick={() => console.log("hello")} className="w-32 h-8">Def+Class btn</Button>
			<Button onClick={() => console.log("hello")} red>Red btn</Button>
			<ProductShow></ProductShow>
		</>
	);
}

export default App;
