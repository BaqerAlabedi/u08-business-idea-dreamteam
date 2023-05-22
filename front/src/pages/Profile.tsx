import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import { HiPencil } from "react-icons/hi";
import ProductShow from "../components/ProductShow";
import { getOneUser } from "../functions/api";


export interface UserResponse {
	user: [{
		_id: string,
		first_name: string,
		email: string,
		surname: string,
		address: string,
		img: string,
		foods: [{
			_id: string,
			title: string,
			desc: string,
			location: [number, number],
			free: boolean,
			price: number,
			img: string,
			expire: [string, number],
			tags: string[],
			created: number,
			sold_to: boolean,
		}
]

}]
}

function Profile() {
	const [data, setData] = useState<UserResponse | null>(null);
	useEffect(() => {

		const fetchData = async () => {
			try {
				const response = await getOneUser("12as");
				console.log(response);
				setData(response);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<div className="w-10/12 mx-auto relative max-w-5xl">
				<Link className="absolute  top-5 lg:top-0 right-5 lg:right-24 text-2xl" to={"/profile/edit"}>
					<HiPencil/>

				</Link>
				<div className="lg:flex lg:gap-5 lg:justify-around lg:W-10/12 ">
					<div className="flex justify-center item-center lg:flex lg:justify-start lg:flex-col">
						<img
							src={data?.user.img}
							alt="placeholder"
							className="rounded-full w-24 my-6 lg:w-32"
						/>
					</div>

					<div className="lg:flex lg:justify-center lg:flex-col lg:gap-5 lg:w-3/5">
						<dl className="mt-2">
							<dt className="font-bold">Email</dt>
							<dd>{data?.user.email}</dd>
						</dl>
						<dl className="mt-2">
							<dt className="font-bold">För- och Efternamn</dt>
							<dd>{data?.user.first_name}</dd>
							<dd>{data?.user.surname}</dd>
						</dl>
						<dl className="mt-2">
							<dt className="font-bold">Adress</dt>
							<dd><dd>{data?.user.address}</dd></dd>
						</dl>
					</div>
				</div>
				<hr className="w-10/12 mx-auto my-5"/>
				<div className="flex justify-center item-center my-5 lg:">
					<Link to={"/product/new"}><Button>Lägg till ny annons</Button></Link>
				</div>
				<h2 className="text-xl my-5 text-semibold">Dina akutella annonser</h2>
				{data && (
					<section className="max-w-5xl mx-auto grid col-auto gap-5 lg:grid-cols-2 ">
						{data.user.foods.map((food, index) => (
							<ProductShow key={index} imgUrl={food.img} title={food.title} description={food.desc} price={food.price} ></ProductShow>
						)
						)}
					</section>
				)}
			</div>
		</>
	);
}

export default Profile;
