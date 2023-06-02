import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { HiPencil } from "react-icons/hi";
import ProductShow from "../components/ProductShow";
import { getOneUser } from "../functions/api";
import useStoreUser from "../storage/UserStorage";
import { Advertisement } from "../components/Advertisement";


export interface UserResponse {
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
}

function Profile() {
	const {storeUser} = useStoreUser();

	const [data, setData] = useState<UserResponse>({
		_id: "",
		first_name: "",
		email: "",
		surname: "",
		address: "",
		img: "",
		foods: [{
			_id: "",
			title: "",
			desc: "",
			location: [0, 0],
			free: false,
			price: 0,
			img: "",
			expire: ["", 0],
			tags: [""],
			created: 0,
			sold_to: false,
		}]
	});


	useEffect(() => {

		const fetchData = async () => {
			try {
				const response = await getOneUser(storeUser);
				setData(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			{data && (
				<div className="w-10/12 mx-auto relative max-w-5xl">
					<Link className="absolute  top-5 lg:top-0 right-5 lg:right-24 text-2xl" to={"/profile/edit"}>
						<HiPencil/>

					</Link>
					<div className="lg:flex lg:gap-5 lg:justify-around lg:W-10/12 ">
						<div className="flex justify-center item-center lg:flex lg:justify-start lg:flex-col">
							<img
								src="https://factory.scandgate.se/wp-content/uploads/2018/03/blank-profile-picture-973460_640.png"
								alt="placeholder"
								className="rounded-full w-24 my-6 lg:w-32"
							/>
						</div>

						<div className="lg:flex lg:justify-center lg:flex-col lg:gap-5 lg:w-3/5">
							<dl className="mt-2">
								<dt className="font-bold">Email</dt>
								<p>{data.email}</p>
							</dl>
							<dl className="mt-2">
								<dt className="font-bold">För- och Efternamn</dt>
								<div className="flex gap-1">
									<p>{data.first_name}</p>
									<p>{data.surname}</p>
								</div>
							</dl>
							<dl className="mt-2">
								<dt className="font-bold">Adress</dt>
								<div><div>{data.address}</div></div>
							</dl>
						</div>
					</div>
					<hr className="w-10/12 mx-auto my-5"/>
					<div className="flex justify-center item-center my-5 lg:">
						<Link to={"/product/create"}><Button>Lägg till ny annons</Button></Link>
					</div>
					<h2 className="text-xl my-5 text-semibold">Dina aktuella annonser</h2>

					<section className="max-w-5xl mx-auto grid col-auto gap-5 lg:grid-cols-2 ">
						{ data.foods.map((item, idx) => (
							<React.Fragment key={item._id}>
								<section>
									<ProductShow
										to={`product/edit/${item._id}`}
										imgUrl={item.img}
										title={item.title}
										description={item.desc}
										add={false}
										price={item.price}
									></ProductShow>
								</section>
								{ (idx !== 0 && idx % 3 === 0) && <><section><Advertisement/></section></> }
							</React.Fragment>
						))}
					</section>

				</div>
			)}
		</div>
	);
}

export default Profile;