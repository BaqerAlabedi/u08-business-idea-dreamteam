import { Link } from "react-router-dom";
import Button from "../components/Button";
import Map from "../components/Map";
import ProductShow from "../components/ProductShow";
import Search from "../components/Search";
import { Key, useEffect, useState } from "react";
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
}

export default function Dashboard(this: unknown) {
	const [data, setData] = useState<Products[]>([]);	// behövs
	const [searchTag, setSearchTag] = useState([]);				// behövs!
	const [values, setValues] = useState("");
	const [filterValue, setFilterValue] = useState("");

	const [products, setProducts] = useState([]);

	const value1 = "starter";
	const value2 = "soup";
	const value3 = "lunch/dinner";
	const value4 = "dessert";
	const value5 = "vegetarian";
	const value6 = "vegan";

	const getAllProducts = async () => {
		const response = await fetch(url);
		const res = await response.json();
		setData(res.foods);
	};
	const handleClick = async () => {
		const resp = await fetch(url);
		const res = await resp.json();

		const allTags = res.foods.map((res: { tags: unknown; }) => res.tags);

		setValues(allTags);
		console.log("TRUE: " + filterValue);

		const filteredItems = allTags.filter((tags: string | string[]) => tags.includes(filterValue));

		setSearchTag(filteredItems);
		console.log(searchTag);
		setData([]);
	};

	useEffect(() => {
		const genGetAllProducts = async () => {
			const res = await getAllProducts();
			setData(res.foods)
		};
		genGetAllProducts();
	}, []);

	return(
		<>
			<Map></Map>

			{/* <Search name="Sök efter plats..."
				filtered
				onClick={handleClick}
				setFilterValue={setFilterValue}
				value1={value1}
				value2={value2}
				value3={value3}
				value4={value4}
				value5={value5}
				value6={value6}
			></Search> */}


			<section className="w-10/12 max-w-7xl mx-auto my-4 grid col-auto gap-5 lg:grid-cols-2">

				{ data.map((item) => (
					<section key={item._id}>
						<ProductShow
							href={"products/:productsID"}   // Tillfällig länk!
							imgUrl={item.img}
							title={item.title}
							description={item.desc}
							add={false}
							price={item.price}
							visible={true}
							distance={1.2}                  // Location är temporärt!
						></ProductShow>
						<div className="m-2"></div>
					</section>

				))}{data.length > 3 && <Advertisement></Advertisement>}

				{ searchTag.map((item) => (
					console.log(searchTag),
					<section key={item}>
						<ProductShow
							href={"products/:productsID"}   // Tillfällig länk!
							imgUrl={item.img}
							title={item.title}
							description={item.desc}
							add={false}
							price={item.price}
							visible={true}
							distance={1.2}                  // Location är temporärt!
						></ProductShow>
					</section>

				))}{searchTag.length < 3 && <Advertisement></Advertisement>}
			</section>
			<Link to={"/product/new"} className="my-4 flex flex-col items-center"><Button>Lägg upp egen annons</Button></Link>
		</>
	);
}