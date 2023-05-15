import Button from "./components/Button";
import ProductShow from "./components/ProductShow";
import { EditProduct } from "./pages/EditProduct";

function App() {
	return (
		<>
			<h1 className="underline">Frontend</h1>
			<Button onClick={() => console.log("hello")} className="bg-red-700 text-white">Example btn</Button>
			<ProductShow></ProductShow>
			<EditProduct></EditProduct>
		</>
	);
}

export default App;
