import React from "react";
import { Key, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Map from "../components/Map";
import ProductShow from "../components/ProductShow";
import Search from "../components/Search";
import { Advertisement } from "../components/Advertisement";

const url = "http://localhost:4000/products";

export interface Products {
	length: number;
    tags: string;
    _id: Key | null | undefined;
    price: number | boolean | undefined;
    desc: string;
    title: string;
    img: string;
        map(arg0: (item: {
            data: Element;
            tags: string;
            _id: string; href: string; img: string; title: string; desc: string; price: number | boolean | undefined; location: number | undefined; filter: string | undefined | null;
    }) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
}

export default function Dashboard(this: unknown) {
	const [data,  setData] = useState<Products[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
	const [filterActive, setFilterActive] = useState(false);

	const getAllProducts = async () => {
		const response = await fetch(url);
		const res = await response.json();
		setData(res.foods);
	};

	const handleClick = async (filter:string) => {
		const resp = await fetch(url);
		const res = await resp.json();
		const filteredData = res.foods;
		const filteredObjects = filteredData.filter((obj: { tags: string | string[]; }) => obj.tags.includes(filter));
		setFilteredProducts(filteredObjects);
		setData([]);
	};

	const resetFilter = (filter:string) => {
		setFilterActive(!filterActive);
		handleClick(filter);
		getAllProducts();
	};

	useEffect(() => {
		const genGetAllProducts = async () => {
			await getAllProducts();
		};
		genGetAllProducts();
	}, []);

	return(
		<>
			<Map></Map>

			<Search
				name="Sök efter plats..."
				filtered
				onClick={handleClick}
				reset={resetFilter}
			></Search>

			<section className="w-10/12 max-w-7xl mx-auto my-4 grid col-auto gap-5 lg:grid-cols-2">

				{ data.map((item, idx) => (
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
						{ idx % 3 === 0 && <><section><Advertisement/></section></> }
					</React.Fragment>
				))}

			</section>

			<Link to={"/product/new"} className="my-4 flex flex-col items-center"><Button>Lägg upp egen annons</Button></Link>
		</>
	);
}