import React from "react";
import { Key, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Map from "../components/Map";
import ProductShow from "../components/ProductShow";
import Search from "../components/Search";
import { Advertisement } from "../components/Advertisement";
import { getProducts } from "../functions/api";

export interface Products {
	foods: any;		// Fixa any!
	length: number;
    tags: string;
    _id: Key | null | undefined;
    price: number | boolean | undefined;
    desc: string;
    title: string;
    img: string;
}


export default function Dashboard(this: unknown) {
	const [data,  setData] = useState<Products[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
	const [filterActive, setFilterActive] = useState(false);
	const [activeFilterProducts, setActiveFilterProducts] = useState(false);

	const genGetAllProducts = async () => {
		// FIXA FILTRERA UT ANVÄNDAREN PRODUKTER!
		const res = await getProducts();
		// const test = res.map(item => item._id);
		// const filteredUser = res.filter(item => item.test !== item.test);
		// console.log(test);
		// console.log(filteredUser);
		// const filteredUser = res.filter((item: { _id: unknown; }) => item._id !== console.log(item._id));
		// console.log(filteredUser)
		// const test = res.map((res) => res.foods);
		// const foodItems = res.map(item =>item)
		// const foodItems = foodUsers.filter((item: { foods: any; }) => console.log(item.foods));

		const products = res.flatMap((item: { foods: unknown; }) => item.foods);

		console.log(products);
		setData(products);
	};
	console.log(data);

	useEffect(() => {
		genGetAllProducts();
	}, []);

	const handleClick = async (filter:string) => {
		setData([]);
		const res = await getProducts();
		const products = res.map((res: { foods: unknown; }) => res.foods);
		const filteredItems = products.flat().filter((item: { tags: string | string[]; }) => item.tags && item.tags.includes(filter));
		setFilteredProducts(filteredItems);

		setActiveFilterProducts(true);
		if (activeFilterProducts) {
			const test = res.map((item: { foods: unknown; }) => item.foods);
			const filteredItems = test.flat().filter((item: { tags: string | string[]; }) => item.tags && item.tags.includes(filter));
			setFilteredProducts(filteredItems);
			console.log(filteredItems);
		}
	};

	const resetFilter = (filter:string) => {
		setFilterActive(!filterActive);
		handleClick(filter);
		genGetAllProducts();
	};

	return(
		<>
			<Map></Map>

			<Search
				name="Sök efter plats..."
				filtered
				onClick={handleClick}
				reset={resetFilter}
			></Search>

			{data && <section className="w-10/12 max-w-7xl mx-auto my-4 grid col-auto gap-5 lg:grid-cols-2">

				{ data.map((item, idx) =>
					<React.Fragment key={item._id}>
						<section>
							<ProductShow
								to={`/product/${item._id}`}
								imgUrl={item.img}
								title={item.title}
								description={item.desc}
								add={false}
								price={item.price}
								distance={1.2}		// Location är temporärt!
							></ProductShow>
						</section>
						{ (idx !== 0 && idx % 3 === 0) && <><section><Advertisement/></section></> }
					</React.Fragment>
				)}

				{ filteredProducts.map((item, idx) => (
					<React.Fragment key={item._id}>
						<section>
							<ProductShow
								to={`/product/${item._id}`}
								imgUrl={item.img}
								title={item.title}
								description={item.desc}
								add={false}
								price={item.price}
								distance={1.2}		// Location är temporärt!
							></ProductShow>
						</section>
						{ (idx !== 0 && idx % 3 === 0) && <><section><Advertisement/></section></> }
					</React.Fragment>
				)
				)}

			</section>}

			<Link to={"/product/new"} className="my-4 flex flex-col items-center"><Button>Lägg upp egen annons</Button></Link>
		</>
	);
}