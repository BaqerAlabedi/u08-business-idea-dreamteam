import { useState } from "react";
import Product from "./pages/Product";

import Button from "./components/Button";

function App() {
	return (
		<>
			<h1 className="underline">Frontend</h1>
			<Button onClick={() => console.log("hello")} className="bg-red-700 text-white">Example btn</Button>
			<Product></Product>
		</>
	);
}

export default App;
