import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { MdError } from "react-icons/md";
import { userRegister } from "../functions/api";
import useStoreUser from "../storage/UserStorage";

function Register() {
	const navigate = useNavigate();
	const {setStoreUser} = useStoreUser();


	const [formData, setFormData] = useState({
		email: "",
		first_name: "",
		surname: "",
		password: "",
		password_confirmation: ""
	});

	const { email, first_name, surname, password, password_confirmation } = formData;

	const [errorMessage, setErrorMessage] = useState("");


	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== password_confirmation) {
			return setErrorMessage("Passwords do not match");
		}

		if (!email || !first_name || !surname || !password || !password_confirmation) {
			return setErrorMessage("Please fill in all fields");
		}

		try {
			const data = await userRegister(formData);
			setStoreUser(data.uid);
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
		<div className="absolute top-0 flex items-center justify-center h-screen w-screen bg-cover bg-center bg-register ">
			<div className="rounded-md md:w-1/3 lg:bg-white/80 lg:p-12 ">
				<div className="flex flex-col justify-center">
					<div className="mx-auto mb-4">
						<h1 className="text-lg w-72 font-bold">Registrera dig</h1>
						<h2 className="w-72">till GrannskapsRätten</h2>
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
							inputID="first_name"
							minLength={3}
							labelText="Förnamn"
							opacity={1}
							placeHolder=""
							value={first_name}
							onChange={handleInputChange}
						/>
						<Input
							inputID="surname"
							minLength={3}
							labelText="Efternamn"
							opacity={1}
							placeHolder=""
							value={surname}
							onChange={handleInputChange}
						/>
						<Input
							type="password"
							minLength={4}
							inputID="password"
							labelText="Nytt lösenord"
							opacity={1}
							placeHolder=""
							value={password}
							onChange={handleInputChange}
						/>
						<Input
							type="password"
							minLength={4}
							inputID="password_confirmation"
							labelText="Bekräfta lösenord"
							opacity={1}
							placeHolder=""
							value={password_confirmation}
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