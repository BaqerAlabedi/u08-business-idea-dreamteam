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
		const res = await getProducts();
		setData(res);
	};

	useEffect(() => {
		genGetAllProducts();
	}, []);

	const handleClick = async (filter:string) => {
		setData([]);
		const test = data.map(res => res.foods);
		const filteredItems = test.flat().filter(item => item.tags && item.tags.includes(filter));
		setFilteredProducts(filteredItems);

		setActiveFilterProducts(true);
		if (activeFilterProducts) {
			const res = await getProducts();
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

				{ data.map((user) =>
					user.foods.map((item: { _id: React.Key | null | undefined; img: string; title: string; desc: string; price: number | boolean | undefined; }, idx: number) => (
						<React.Fragment key={item._id}>
							<section>
								<ProductShow
									to={`/product/${item._id}`}
									imgUrl={item.img}
									title={item.title}
									description={item.desc}
									add={false}
									price={item.price}
									visible={true}
									distance={1.2}		// Location är temporärt!
								></ProductShow>
							</section>
							{ (idx !== 0 && idx % 3 === 0) && <><section><Advertisement/></section></> }
						</React.Fragment>
					)
					))}

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
								visible={true}
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