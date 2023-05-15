import Button from "../components/Button";
import Input from "../components/Input";

function Register() {
	return (
		<div className="flex items-center justify-center h-screen bg-cover bg-center bg-register ">
			<div className="rounded-md md:w-1/3 h-3/5 lg:bg-white/80 lg:p-12 ">
				<div className="flex flex-col justify-center mb-12">
					<div className="mx-auto">
						<h1 className="w-72 font-bold">Registrera dig</h1>
						<h2 className="w-72 mb-2">till GrannskapsRätten</h2>
					</div>
					<form className="mx-auto">
						<Input inputID="email" labelText="Email" opacity={1} placeHolder=""></Input>
						<Input inputID="password" labelText="Nytt lösenord" opacity={1} placeHolder=""></Input>
						<Input inputID="password" labelText="Bekräfta lösenord" opacity={1} placeHolder=""></Input>
						<Button className="w-72 mt-4 mb-4 bg-teal-700 text-white" >Registrera dig</Button>
					</form>
					<div className="flex flex-row justify-center gap-8">
						<h3 className="lg:mr-10 font-bold">Redan kund?</h3>
						<a className="underline font-bold text-teal-700">Logga in</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
