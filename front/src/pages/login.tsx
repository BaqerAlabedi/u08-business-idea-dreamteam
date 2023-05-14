import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
	return (
		<div className="relative h-screen bg-cover bg-center bg-login ">
			<div className="absolute rounded-md sm:w-1/2 md:w-1/3 h-3/5 lg:bg-white opacity-80 lg:p-12 top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
				<div className="ml-2 flex flex-col justify-center justify-items-center mb-12">
					<div className="lg:ml-8 mb-8">
						<h1 className="mb-0 font-bold">Logga in</h1><br></br>
						<h2 className="w-48 mt-0 mb-4">till GrannskapsRätten</h2>
					</div>
					<form className="lg:ml-10 ">
						<Input inputID="email" labelText="Email" opacity={1} placeHolder="Email"></Input>
						<Input inputID="password" labelText="Password" opacity={1} placeHolder="Password"></Input>
						<Button className="w-72 mt-4 mb-4" >Login</Button>
					</form>
					<div className="flex flex-row justify-center gap-8">
						<h3 className="mr-10 font-bold">Inte kund än?</h3>
						<a className="underline font-bold text-teal-700">Registrera dig</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
