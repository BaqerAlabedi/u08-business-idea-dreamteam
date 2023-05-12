import Input from "../components/Input";

function Login() {
	return (
		<div className="relative h-screen bg-cover bg-center bg-login ">
			<div className="absolute rounded-md sm:w-1/2 h-3/5 lg:bg-white opacity-80 lg:p-12 top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
				<div className="ml-4">
					<h1 className="mb-0 font-bold">Logga in</h1><br></br>
					<h2 className="w-48 mt-0 mb-4">till GrannskapsRätten</h2></div>

				<form className="lg:pl-12 p-4">
					<label for="email">Email</label>
					<Input></Input>
					<label for="password">Password</label>
					<Input></Input>
				</form>

				<div className="flex flex-row">
					<h3>Inte kund än?</h3>
					<a>Registrera dig</a>
				</div>
			</div>
		</div>
	);
}

export default Login;
