import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function Register() {
	const [formData, setFormData] = useState({
		email: "",
		surname: "",
		lastname: "",
		password: "",
		confirmPassword: ""
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
	};

	const handleInputChange = (event: React.FormEvent<HTMLFormElement>) => {
		const { id, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[id]: value,
		}));
	};

	return (
		<div className="absolute top-0 flex items-center justify-center h-screen w-screen bg-cover bg-center bg-register ">
			<div className="rounded-md md:w-1/3 lg:bg-white/80 lg:p-12 ">
				<div className="flex flex-col justify-center mb-12">
					<div className="mx-auto">
						<h1 className="text-lg w-72 font-bold">Registrera dig</h1>
						<h2 className="w-72 mb-2">till GrannskapsRätten</h2>
					</div>
					<form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4">
						<Input
							type="email"
							inputID="email"
							labelText="Email"
							opacity={1}
							placeHolder=""
							value={formData.email}
							onChange={handleInputChange}
						/>
						<Input
							inputID="surname"
							labelText="Förnamn"
							opacity={1}
							placeHolder=""
							value={formData.surname}
							onChange={handleInputChange}
						/>
						<Input
							inputID="lastname"
							labelText="Efternamn"
							opacity={1}
							placeHolder=""
							value={formData.lastname}
							onChange={handleInputChange}
						/>
						<Input
							type="password"
							inputID="password"
							labelText="Nytt lösenord"
							opacity={1}
							placeHolder=""
							value={formData.password}
							onChange={handleInputChange}
						/>
						<Input
							type={"password"}
							inputID="confirmPassword"
							labelText="Bekräfta lösenord"
							opacity={1}
							placeHolder=""
							value={formData.confirmPassword}
							onChange={handleInputChange}
						/>
						<Button>Login</Button>
					</form>
					<div className="flex flex-row justify-center gap-8 my-4">
						<h3 className="lg:mr-10 font-bold">Redan kund?</h3>
						<Link to={"/login"} className="underline font-bold text-teal-700">
							Logga in
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
