//import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Map from "../components/Map";
import ProductShow from "../components/ProductShow";
import Search from "../components/Search";
import { Key, useEffect, useState } from "react";

// import { Advertisement } from "../components/Advertisement";
// import Navbar from "../components/Navbar";
// import Product from "./Product";
// import { render } from "react-dom";
// import { BsTags } from "react-icons/bs";
// import { DataItem } from "../components/Table";

// export interface TagsFilter {
// 		tags: string
// }

export interface Products {
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
	// products: [{
	// 	_id: string,
	// 	href: string,
	// 	imgUrl: string,
	// 	title: string,
	// 	description: string,
	// 	price?: number | boolean,
	// 	add?: boolean,
	// 	distance?: number,
	// 	visible?: boolean,
	// }]
}

export default function Dashboard(this: unknown) {
	// const [result, setResult] = useState<Products[]>([]);

	const [data, setData] = useState<Products[]>([]);
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
	const [filteredData, setFilteredData] = useState<Products[]>([]);

	const getAllProducts = async () => {
		const response = await fetch("http://localhost:4000/products");
		const res = await response.json();
		// setResult(res.foods);
		setData(res.foods);
	};

	useEffect(() => {
		const genGetAllProducts = async () => {
			await getAllProducts();
		};
		genGetAllProducts();


		const filteredItems = data.filter((item) =>
			selectedFilters.every((filter) => item.tags.includes(filter))
		);

		setFilteredData(filteredItems);
		// setResult(filteredItems);
		// console.log(filteredItems)
	}, [data, selectedFilters]);

	const handleFilterButtonClick = (filter: string) => {
		// Check if the filter is already selected
		const isFilterSelected = selectedFilters.includes(filter);

		// Toggle the filter selection
		if (isFilterSelected) {
			setSelectedFilters(selectedFilters.filter((selected) => selected !== filter));
			console.log(setSelectedFilters);
		} else {
			setSelectedFilters([...selectedFilters, filter]);
			console.log(setSelectedFilters);
		}
	};

	// function filteredTags() {
	// 	const test: (string[])[] = (result?.map(data => data.tags) ?? []) as (string[])[];
	// 	console.log(test);

	// 	const filteredItems = test.filter(tags => tags.includes('dessert'));
	// 	console.log(filteredItems);
	// }


	return(
		<>
			<Map></Map>

			<Search name="Sök efter plats..." filtered selectedFilters={selectedFilters}
				onFilterButtonClick={handleFilterButtonClick}></Search>

			<section className="w-10/12 max-w-7xl mx-auto my-4 grid col-auto gap-5 lg:grid-cols-2">
				{filteredData.map((item) => (
					<section key={item._id}>
						<ProductShow
							href={"products/:productsID"}	// Tillfällig länk!
							imgUrl={item.img}
							title={item.title}
							description={item.desc}
							add={false}
							price={item.price}
							visible={true}
							distance={1.2}					// Location är temporärt!
						></ProductShow>
					</section>
				))}
			</section>

			{/* <section className="w-10/12 max-w-7xl mx-auto my-4 grid col-auto gap-5 lg:grid-cols-2">
				{result && result.map(data =>
					<section key={data._id}>
						<ProductShow
							href={"products/:productsID"}	// Tillfällig länk!
							imgUrl={data.img}
							title={data.title}
							description={data.desc}
							add={false}
							price={data.price}
							visible={true}
							distance={1.2}					// Location är temporärt!
						></ProductShow>
					</section>
				)}
			</section> */}

			<Link to={"/product/new"} className="my-4 flex flex-col items-center"><Button>Lägg upp egen annons</Button></Link>
		</>
	);
}