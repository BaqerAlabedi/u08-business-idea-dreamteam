import { FaLocationArrow } from "react-icons/fa";

function ProductShow() {
	return (
		<>
			<div className="relative">
				<img
					className="rounded w-full"
					src="https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_960_720.jpg"
				/>
				<div className="p-2 bg-white/80 rounded absolute bottom-8 left-4 grid w-3/5">
					<h6 className="font-semibold">Maträtt rubrik</h6>
					<p className="whitespace-nowrap overflow-hidden overflow-ellipsis">Lorem ipsum dolor sit amet. denna text är jättelång och kortas ner</p>
				</div>
				<div className="bg-teal-700 w-24 h-10 pt-2 rounded absolute top-6 left-4">
					<p className="font-bold text-white text-center">20 kr</p>
				</div>

				<div className="w-32 h-10 bg-white/80 rounded absolute top-6 right-4 flex items-center gap-4 justify-center">

					{/* If statement for location-symbol or edit-btn*/}

					<FaLocationArrow className=""/>
					<p className="text-center">
						<b>1.2</b> km
					</p>

					{/*<button><FaEdit/></button> */}
				</div>
			</div>
		</>
	);
}

export default ProductShow;