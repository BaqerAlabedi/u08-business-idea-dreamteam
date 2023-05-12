import Input from "../components/Input";

function Login() {
	return (
		<div className="relative h-screen bg-cover bg-center bg-login ">
			<div className="absolute rounded-md w-1/2 h-3/5 lg:bg-white opacity-80 lg:p-12 top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
				<div className="">
					<h2 className=" font-bold">Logga in</h2><br></br>
					<h2 className="w-48">till GrannskapsRätten</h2></div>

				<form>
					<label for="email">Email</label>
					<Input></Input>
					<label for="password">Password</label>
					<Input></Input>
				</form>
			</div>
		</div>
	);
}

export default Login;
