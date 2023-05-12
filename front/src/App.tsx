import { useState } from "react";

import Button from "./components/Button";
import Index from "./pages/Index";

function App() {
	return (
		<>
			<h1 className="underline">Frontend</h1>
			<Button onClick={() => console.log("hello")} className="bg-red-700 text-white">Example btn</Button>
			<Index></Index>
		</>
	);
}

export default App;
