import { FaAngleLeft, FaLocationArrow } from "react-icons/fa";


function Product(){
	// fake data
	const data = {
		title: "Maträttens namn",
		price: 20,
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg",
		location: "Pelargatan 11",
		lastDayToUse: "2023-06-01",
		created: Date.now()-1000000,
		tags: ["vegan", "soppa", "middag", "hemmagjord"]
	};
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
	return(
		<div>
			<section className="relative">
				<img src={data.img} alt="Image of food" className="w-screen h-full object-cover " />
				<FaAngleLeft className="absolute top-2 left-2 text-2xl bg-white/50 rounded-lg"></FaAngleLeft>
				<div className="absolute top-2 right-2 flex bg-white/50 rounded-lg p-2 gap-2 items-center">
					<FaLocationArrow className="text-sm"></FaLocationArrow>
					<p><span className="font-semibold">1.2</span> km</p>
				</div>
			</section>
			<div className="mx-auto w-10/12 mt-5">
				<section className="flex justify-between items-center">
					<h2 className="text-lg font-semibold">{data.title}</h2>
					<h3 className="bg-teal-700 px-4 py-2 rounded-lg text-white">{data.price} kr</h3>
				</section>
				<p className="my-5">{data.desc}</p>
				<div className="flex justify-between">
					<p>Utgångsdatum:</p>
					<p className="font-semibold">{data.lastDayToUse}</p>
				</div>
				<div className="flex justify-between my-5">
					<p>Annons lades ut:</p>
					<p className="font-semibold">{getTimeAgo(data.created)}</p>
				</div>
				<section>

				</section>
			</div>
		</div>
	);
}

export default Product;