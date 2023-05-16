import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function Register() {
	return (
		<div className="absolute top-0 flex items-center justify-center h-screen w-screen bg-cover bg-center bg-register ">
			<div className="rounded-md md:w-1/3 lg:bg-white/80 lg:p-12 ">
				<div className="flex flex-col justify-center mb-12">
					<div className="mx-auto">
						<h1 className="  text-lg w-72 font-bold">Registrera dig</h1>
						<h2 className="w-72 mb-2">till GrannskapsRätten</h2>
					</div>
					<form className="mx-auto flex flex-col gap-4">
						<Input inputID="email" labelText="Email" opacity={1} placeHolder=""></Input>
						<Input inputID="surname" labelText="Förnamn" opacity={1} placeHolder=""></Input>
						<Input inputID="lastname" labelText="Efternamn" opacity={1} placeHolder=""></Input>
						<Input inputID="password" labelText="Nytt lösenord" opacity={1} placeHolder=""></Input>
						<Input inputID="password" labelText="Bekräfta lösenord" opacity={1} placeHolder=""></Input>
						<Button>Login</Button>
					</form>
					<div className="flex flex-row justify-center gap-8 my-4">
						<h3 className="lg:mr-10 font-bold">Redan kund?</h3>
						<Link to={"/login"} className="underline font-bold text-teal-700">Logga in</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
