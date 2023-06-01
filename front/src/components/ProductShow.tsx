import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

export function ProductShow(props: { to: string, imgUrl: string, title: string, description: string, price?: number | boolean, add?: boolean, distance?: number | boolean}) {
	return (
		<>
			<div className="relative">
				<Link to={props.to}>
					<img
						className="rounded w-full"
						src={props.imgUrl}
					/>
					<div className="p-2 bg-white/80 rounded absolute bottom-8 left-4 grid w-3/5">
						<h6 className="font-semibold hover:underline">{props.title}
						</h6>
						<p className="whitespace-nowrap overflow-hidden overflow-ellipsis hover:underline">{props.description}
						</p>
					</div>
				</Link>

				{props.add ? <div className="bg-zinc-600 w-24 h-10 pt-2 rounded absolute top-6 left-4">
					<p className="font-bold text-white text-center">
                        Annons
					</p>
				</div>
					: <div className="bg-teal-700 w-24 h-10 pt-2 rounded absolute top-6 left-4">
						<p className="font-bold text-white text-center">
							{props.price} kr</p>
					</div>}

				{props.distance && (<div className="w-32 h-10 bg-white/80 rounded absolute top-6 right-4 flex items-center gap-4 justify-center">
					<FaLocationArrow className=""/>
					<p className="text-center">
						<b>{props.distance}
						</b> km
					</p>
				</div> )}
			</div>
		</>
	);
}

export default ProductShow;