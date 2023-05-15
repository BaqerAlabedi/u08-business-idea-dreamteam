// import Button from "./components/Button";
// import ProductShow from "./components/ProductShow";
import Register from "./pages/Register";
import Login from "./pages/login";

function App() {
	return (
		<>
			{/* <h1 className="underline">Frontend</h1>
			<Button onClick={() => console.log("hello")} className="bg-red-700 text-white">Example btn</Button> */}
			<Login></Login>
			<Register></Register>
		</>
	);
}

export default App;
