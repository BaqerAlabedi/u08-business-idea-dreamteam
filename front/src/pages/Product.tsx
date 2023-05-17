import { FaAngleLeft, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { getOneProduct } from "../functions/api";


function Product(){

	const [data, setData] = useState({});

	//fake data
	// const data = {
	// 	title: "Maträttens namn",
	// 	price: 20,
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	// 	img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg",
	// 	location: "Pelargatan 11",
	// 	lastDayToUse: "2023-06-01",
	// 	created: Date.now()-1000000,
	// 	tags: ["vegan", "soppa", "middag", "hemmagjord"]
	// };

	function getTimeAgo(time:number) {
		const timeDiff = Date.now() - time;
		const minutes = Math.floor(timeDiff / 60000); // 1 minute = 60000 milliseconds
		const hours = Math.floor(minutes / 60);

		if (hours > 0) {
			return `${hours} h sen`;
		} else {
			return `${minutes} m sen`;
		}
	}


	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await getOneProduct("hejh");
				console.log(res.foods[0]);
				setData(res.foods[0]);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return(
		<div className="relative max-w-5xl mx-auto">
			{data && (
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
			)}

			{data && (
				<div className="mx-auto w-10/12 mt-5">
					<section className="flex justify-between items-center">
						<h2 className="text-lg font-semibold">{data.title}</h2>
						<h3 className="bg-teal-700 px-5 py-1.5 rounded-lg text-white">{data.price} kr</h3>
					</section>
				</div>
			)}
			{data && (
				<div className="mx-auto w-10/12 mt-5 lg:mb-5 lg:flex lg:justify-between">
					<p className="my-5 lg:my-0 lg:w-1/2">{data.desc}</p>
					<section>
						<div className="flex justify-between lg:flex-col lg:text-right">
							<p>Utgångsdatum:</p>
							<p className="font-semibold">{data.expire}</p>
						</div>
						<div className="flex justify-between my-5 lg:flex-col lg:text-right">
							<p>Annons lades ut:</p>
							<p className="font-semibold">{getTimeAgo(data.created)}</p>
						</div>
					</section>
				</div>
			)}

			<hr className="mx-auto w-10/12" />

			{data.tags && (
				<section className="mx-auto w-10/12 grid grid-cols-3 xl:grid-cols-4 gap-3 my-5 mb-28">
					{data.tags.map((tag, index) => (
						<h4 key={index}
							className="border-teal-700 px-3 py-1 border-2 rounded-lg text-center whitespace-nowrap overflow-hidden overflow-ellipsis">
							{tag.charAt(0).toUpperCase() + tag.slice(1)}
						</h4>
					))}  *
				</section>
			)}

			<div className="bg-gray-200 py-3 fixed bottom-0 left-0 right-0">
				{/* Ta bort sen */}
				<Link to={"/conversation/236632"} className="flex flex-col items-center"><Button>Kontakta säljare</Button></Link>
			</div>
		</div>
	);
}

export default Product;