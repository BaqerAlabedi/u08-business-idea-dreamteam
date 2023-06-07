import Input from "../components/Input";
import Button from "../components/Button";
import { BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";
import { getOneUser, updateOneUser, deleteOneUser } from "../functions/api";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import useStoreUser from "../storage/UserStorage";

export interface UserId {
	_id: string;
	first_name: string;
	surname: string;
	address: string;
	img: string;
  }



function EditProfile() {
	const navigate = useNavigate();
	const {storeUser} = useStoreUser();
	const [showModal, setShowModal] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [result, setResult] = useState<UserId>({
		_id: "",
		first_name: "",
		surname: "",
		address: "",
		img: ""
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getOneUser(storeUser);
				console.log(data);
				console.log(storeUser);
				setResult(data.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);



	const handleClick = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const handleDelete = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		if(storeUser) {
			try {
				await deleteOneUser( storeUser);
				navigate("/");
			} catch (error) {
				setErrorMessage("Try again, something went wrong");
			}
		}
	};
	const actionBar = (
		<div>
			<Button red onClick={handleDelete}>Radera</Button>
		</div>
	);
	const modal = <Modal onClose={handleClose} actionBar={actionBar}>
		<p className="text-center">Är du säker på att du vill radera din profil?</p>
	</Modal>;


	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			await updateOneUser(result, storeUser);
			navigate("/profile");
		} catch (error) {
			return console.log("Try again, something went wrong");
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setResult((prevResult) => ({
			...prevResult,
			[id]: value,
		}));
	};
	console.log(result);
	return (

		<div className="m-6">
			<div className="block float-left">
				<Link to={"/profile"} className="underline font-bold text-teal-700">
					<button className="min-[800px]:hidden">
						<BsArrowLeft size={25}></BsArrowLeft>
					</button>
					<button className="max-[800px]:hidden">
						<MdKeyboardArrowLeft size={40}></MdKeyboardArrowLeft>
					</button>
				</Link>
			</div>
			<div className="flex justify-center items-center my-2">
				<div className="flex">
					<h2 className="text-xl font-bold">
                    Ändra profil</h2>
				</div>
			</div>
			<div className="min-[800px]:flex justify-center items-start">
				<div className="flex justify-center min-[800px]:mx-20">
					<img src=""
						alt="placeholder"
						className="rounded-full w-24 my-6" />
				</div>
				<div className="flex justify-center items-center mb-5">
					<div className="flex justify-center items-center">
						<form onSubmit={handleSubmit} className="lg:flex min-[320px]:block">
							<div className="lg:mr-20">
								<div className="min-[800px]:flex">
									<div className="min-[800px]:mx-2">
										<Input  placeHolder={result.first_name ? result.first_name : ""} inputID={"first_name"} onChange={handleInputChange} labelText={"Förnamn"}></Input>
									</div>
								</div><div className="min-[800px]:flex">
									<div className="min-[800px]:mx-2">
										<Input placeHolder={result.surname ? result.surname : ""} inputID={"surname"} onChange={handleInputChange} labelText={"Efternamn"}></Input>
									</div>
									<div className="min-[800px]:mx-2">
										<Input placeHolder={result.address ? result.address : ""} inputID={"address"} onChange={handleInputChange} labelText={"Adress"}></Input>
									</div>
								</div><div className="flex justify-center mt-2 min-[800px]:justify-end">
									<div className="block m-2">
										<Button children={"Spara uppgifter"} className={""}></Button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<hr className="w-full" />
			<div className="flex justify-center my-5">
				<Button red onClick={handleClick}>Ta bort konto</Button>
				{showModal && modal}
			</div>
		</div>
	);
}
export default EditProfile;