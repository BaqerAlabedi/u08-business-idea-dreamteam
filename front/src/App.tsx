import { useState } from "react";

import Button from "./components/Button";

function App() {
	return (
		<>
			<h1 className="underline">Frontend</h1>
			<Button onClick={() => console.log("hello")} className="bg-red-700 text-white">Example btn</Button>
		</>
	);
}

export default App;
