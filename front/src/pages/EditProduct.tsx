import Input from "../components/Input";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { updateOneProduct, getOneProduct, deleteOneProduct } from "../functions/api";
import { useParams } from "react-router-dom";
import { MdKeyboardArrowLeft, MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import useStoreUser from "../storage/UserStorage";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

type ProductParam = {
	productID: string
}
export interface FoodResponse {
	foods: [{
		title: string,
		desc: string,
		location: string,
		price: number,
		img: string,
		expire: string [],
		tags: string[],
		is_sold: boolean,
	}
 ]
}


function EditProduct() {
	const apiKey = import.meta.env.VITE_MAPS_API_KEY;

	const navigate = useNavigate();
	const categoryTags = ["tilltugg", "förrätt", "soppa", "sallad", "huvudrätt", "vegetariskt", "vegansk", "dessert"];
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [value, setValue] = useState<any>();
	const { productID } = useParams<ProductParam>();
	const {storeUser} = useStoreUser();
	const [showModal, setShowModal] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [formData, setFormData] = useState({
		title: "",
		desc: "",
		location: "",
		price: 0,
		img: "",
		expire: ["", ""],
		tags: [""],
		is_sold: false
	});

	useEffect(() => {
		if(productID) {
			const fetchData = async () => {
				try {
					const response = await getOneProduct(productID);
					setFormData(response.foods[0]);
					setSelectedTags(response.foods[0].tags);
				} catch (error) {
					console.error(error);
				}
			};
			fetchData();
		}
	}, []);

	const handleClick = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const handleDelete = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		if(productID) {
			try {
				await deleteOneProduct(productID, storeUser);
				navigate("/profile");
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
		<p className="text-center">Är du säker på att du vill radera den här annonsen?</p>
	</Modal>;


	const handleTagCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, checked } = event.target;
		let updatedTags = [...selectedTags];

		if (checked) {
			updatedTags.push(id);
		} else {
			updatedTags = updatedTags.filter((tag) => tag !== id);
		}

		setSelectedTags(updatedTags);
		setFormData((prevFormData) => ({
			...prevFormData,
			tags: updatedTags,
		}));
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setErrorMessage("");
		setFormData((prevFormData) => ({
			...prevFormData,
			[id]: value,
		}));
	};

	const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { id, value } = event.target;
		setErrorMessage("");
		setFormData((prevFormData) => ({
			...prevFormData,
			[id]: value,
		}));
	};
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			expire: [value, prevFormData.expire[1]],
		}));
	};

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			expire: [prevFormData.expire[0], value],
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormData((prevFormData) => ({
			...prevFormData,
			location: value.value.place_id,
		}));
		if(productID && formData.location) {
			try {
				await updateOneProduct(formData, productID);
				navigate("/profile");
			} catch (error) {
				setErrorMessage("Try again, something went wrong");
			}
		}
	};




	return (
		<div className="m-8">
			<div className="block float-left">
				<Link to="/profile">
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
                    Ändra annons</h2>
				</div>
			</div>
			{formData && (
				<div className="flex justify-center items-center mb-10">
					<div className="flex justify-center items-center">
						<form onSubmit={handleSubmit} className="lg:flex min-[320px]:block">
							<div className="lg:mr-20">
								<Input placeHolder={formData.title} inputID={"title"} labelText={"Rubrik"} onChange={handleInputChange}></Input>
								<label htmlFor="desc">Beskrivning</label><br></br>
								<textarea
									className="box-border w-72 rounded border-solid border-gray-300 border p-2"
									id="desc"
									placeholder={formData.desc}
									name="desc"
									rows={6}
									maxLength={300}
									onChange={handleTextareaChange}
								></textarea><br></br>
								<label htmlFor="">Kategori</label>
								{categoryTags.map((tag: string) => (
									<div key={tag} className="my-2">
										<input
											className="text-sm"
											type="checkbox"
											id={tag}
											checked={selectedTags.includes(tag)}
											onChange={handleTagCheckboxChange}
										/>
										<label htmlFor={tag} className="capitalize ml-2 my-2">{tag}</label>
									</div>
								))}
							</div>

							<div>
								<label htmlFor="googleLocation">Address</label>
								<GooglePlacesAutocomplete
									apiKey={apiKey}
									selectProps={{
										inputId: "googleLocation",
										placeholder: "Ange en address",
										value,
										onChange: setValue,
									}}
								/>
								<Input placeHolder={(formData.price.toString())} inputID={"price"} labelText={"Pris"} onChange={handleInputChange}></Input>
								<label htmlFor="dates" className="block my-2">Tillagning/utgångsdatum</label>
								<select onChange={handleSelectChange} id="dates" className="block my-2 px-5 box-border h-11 rounded border-solid border-gray-300 border">
									<option  value="tillagning">Tillagningsdatum</option>
									<option  value="utgångsdatum">Utgångsdatum</option>
								</select>
								<input  onChange={handleDateChange} type="date" id="dates" className="block mt-2 mb-5 px-6 box-border h-11 rounded border-solid border-gray-300 border"/>

								<div className="flex justify-center min-[800px]:block">
									<Button >Uppdatera annons</Button>
									{errorMessage && (
										<div className="flex justify-center items-center my-4 border-2 border-red-700 p-1">
											<MdError className="text-xl mr-3 text-red-700"></MdError>
											<p className="font-semibold">{errorMessage}</p>
										</div>
									)}
								</div>
							</div>
						</form>
					</div>
				</div>
			)}
			<hr className="w-full" />
			<div className="flex justify-center my-5">
				<Button red onClick={handleClick} >Radera annons</Button>
				{showModal && modal}
			</div>
		</div>
	);
}

export default EditProduct;