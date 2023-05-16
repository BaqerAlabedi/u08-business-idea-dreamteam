import Button from "./components/Button";
import ProductShow from "./components/ProductShow";
import { EditProfile } from "./pages/EditProfile";

function App() {
	return (
		<>
			<h1 className="underline">Frontend</h1>
			<Button onClick={() => console.log("hello")} className="bg-red-700 text-white">Example btn</Button>
			<ProductShow></ProductShow>
			<EditProfile></EditProfile>
		</>
	);
}

export default App;
