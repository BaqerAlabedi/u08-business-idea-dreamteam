import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { userLogin } from "../functions/api";
import { MdError } from "react-icons/md";

function Login() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!email || !password) {
			return setErrorMessage("Please fill in all fields");
		}

		try {
			await userLogin(formData);
			navigate("/dashboard");
		} catch (error) {
			return setErrorMessage("Try again, something went wrong");
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setErrorMessage("");
		setFormData((prevFormData) => ({
			...prevFormData,
			[id]: value,
		}));
	};
	return (
		<div className="absolute top-0 flex items-center justify-center h-screen w-screen bg-cover bg-center bg-login ">
			<div className="rounded-md md:w-1/3  lg:bg-white/80 lg:p-12 ">
				<div className="flex flex-col justify-center">
					<div className="mx-auto mb-4">
						<h1 className=" text-lg w-72 font-bold">Logga in</h1>
						<h2 className="w-72 mb-2">till GrannskapsRätten</h2>
					</div>
					<form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4">
						<Input
							type="email"
							inputID="email"
							labelText="Email"
							opacity={1}
							placeHolder=""
							value={email}
							onChange={handleInputChange}
						/>
						<Input
							type="password"
							minLength={4}
							inputID="password"
							labelText="Lösenord"
							opacity={1}
							placeHolder=""
							value={password}
							onChange={handleInputChange}
						/>
						<Button>Login</Button>
					</form>
					{errorMessage && (
						<div className="flex justify-center items-center my-4 border-2 border-red-700 p-1">
							<MdError className="text-xl mr-3 text-red-700"></MdError>
							<p className="font-semibold">{errorMessage}</p>
						</div>
					)}
					<div className="flex flex-row justify-center gap-8 my-4">
						<h3 className="lg:mr-10 font-bold">Inte kund än?</h3>
						<Link to={"/register"} className="underline font-bold text-teal-700">Registrera dig</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
