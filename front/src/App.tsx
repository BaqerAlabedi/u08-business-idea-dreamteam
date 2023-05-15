import Button from "./components/Button";
import ProductShow from "./components/ProductShow";
import Profile from "./pages/Profile";

function App() {
	return (
		<>
			<h1 className="underline">Frontend</h1>
			<Button onClick={() => console.log("hello")} className="bg-red-700 text-white">Example btn</Button>
			<ProductShow></ProductShow>
			<Profile imageUrl={""}></Profile>

		</>
	);
}

export default App;
