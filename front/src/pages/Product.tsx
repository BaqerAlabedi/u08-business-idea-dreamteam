import { FaAngleLeft, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { getOneProduct } from "../functions/api";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal";

type ProductParam = {
	productID: string
}
export interface FoodResponse {
		_id: string,
		title: string,
		desc: string,
		location: [number, number],
		free: boolean,
		price: number,
		img: string,
		expire: [string, string],
		tags: string[],
		created: number,
		sold_to: boolean,
		user_email: string
}


function Product(){
	const [data, setData] = useState<FoodResponse | null>(null);
	const { productID } = useParams<ProductParam>();
	const [userEmail, setUserEmail] = useState("");

	console.log(data)

	useEffect(() => {
		if(productID) {
			const fetchData = async () => {
				try {
					const response = await getOneProduct(productID);
					setData(response.foods[0]);
					setUserEmail(response.email);
				} catch (error) {
					console.error(error);
				}
			};
			fetchData();
		}
	}, []);


	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};
	const actionBar = (
		<div>
			<Button onClick={handleClose}><a href = {"mailto:" + userEmail}>Kontakta säljaren</a></Button>
		</div>
	);
	const modal = <Modal onClose={handleClose} actionBar={actionBar}>
		<p className="text-center">Vi jobbar för fullt på att skapa en chatfunktion som kommer inom kort. Tills vidare får du gärna maila säljaren.</p>
	</Modal>;

	return(
		<div className="relative max-w-5xl mx-auto">
			{ data && (
				<>
					<section>
						<img src={data.img} alt="Image of food" className="w-screen object-cover h-[25rem]" />
						<Link to={"/dashboard"}>
							<FaAngleLeft className="absolute top-2 left-2 text-2xl bg-white/30 rounded-lg"></FaAngleLeft>
						</Link>
						<div className="absolute top-2 right-2 flex bg-white/50 rounded-lg p-2 gap-2 items-center">
							<FaLocationArrow className="text-sm"></FaLocationArrow>
							<p><span className="font-semibold">1.2</span> km</p>
						</div>
					</section>
					<div className="mx-auto w-10/12 mt-5">
						<section className="flex justify-between items-center">
							<h2 className="text-lg font-semibold">{data.title}</h2>
							<h3 className="bg-teal-700 px-5 py-1.5 rounded-lg text-white">{data.price} kr</h3>
						</section>
					</div>
					<div className="mx-auto w-10/12 mt-5 lg:mb-5 lg:flex lg:justify-between">
						<p className="my-5 lg:my-0 lg:w-1/2">{data.desc}</p>
						<section>
							<div className="flex justify-between lg:flex-col lg:text-right">
								<p>Utgångsdatum:</p>
								<p className={Date.parse(data.expire[1]) < Date.now() ? "font-semibold text-red-600" : "font-semibold"}>{data.expire}</p>
							</div>
						</section>
					</div>
					<hr className="mx-auto w-10/12" />
					<section className="mx-auto w-10/12 grid grid-cols-3 xl:grid-cols-4 gap-3 my-5 mb-28">
						{data.tags.map((tag, index) => (
							<h4 key={index}
								className="border-teal-700 px-3 py-1 border-2 rounded-lg text-center whitespace-nowrap overflow-hidden overflow-ellipsis">
								{tag.charAt(0).toUpperCase() + tag.slice(1)}
							</h4>
						))}
					</section>
				</>
			)}
			<div className="bg-gray-200 py-3 fixed bottom-0 left-0 right-0">
				<div className="flex flex-col items-center">
					<Button onClick={handleClick}>Kontakta säljare</Button>
					{showModal && modal}
				</div>
			</div>
		</div>
	);
}

export default Product;