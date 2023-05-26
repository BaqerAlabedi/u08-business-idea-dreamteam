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
        map(arg0: (item: {
            data: Element;
            tags: string;
            _id: string; href: string; img: string; title: string; desc: string; price: number | boolean | undefined; location: number | undefined; filter: string | undefined | null;
    }) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
}

export default function Dashboard(this: unknown) {
	const [data, setData] = useState<Products[]>([]);	// behövs
	const [searchTag, setSearchTag] = useState([]);				// behövs!
	const [values, setValues] = useState("");
	// const [tagButton, setTagButton] = useState("");

	const [showClickedFilter, setShowClickedFilter] = useState<Products[]>([]);
	// console.log(showClickedFilter)

	// const [testValue, setTestValue] = useState("");

	// const [showFilteredProducts, setShowFilteredProducts] = useState();

	// const [activeFilter, setActivefilter] = useState(false);

	const [filterValue, setFilterValue] = useState("");

	const [products, setProducts] = useState([]);
	// const []

	// const value = "snack";
	const value1 = "starter";
	const value2 = "soup";
	const value3 = "lunch/dinner";
	const value4 = "dessert";
	const value5 = "vegetarian";
	const value6 = "vegan";

	// const [allvalues, setAllValues] = useState(value);

	// useEffect(() => {
	// 	setTagButton(value);
	// }, []);
	// console.log(tagButton);

	const getAllProducts = async () => {
		const response = await fetch(url);
		const res = await response.json();
		setData(res.foods);
		// setProducts(res.foods);

		// const tags = data.map((res: { tags: unknown; }) => res.tags);
		// const allProducts = res.foods;
		// setProducts(allProducts);

		// useEffect(() => {
		// 	const allTags = res.foods.map((res: { tags: unknown; }) => res.tags)
		// 	const showProducts = [...res, ...allTags]
		// 	setProducts(showProducts);
		// 	console.log(showProducts)
		// })
	};

	const handleClick = async () => {
		const resp = await fetch(url);
		const res = await resp.json();

		const allTags = res.foods.map((res: { tags: unknown; }) => res.tags);
		// console.log(allTags);

		setValues(allTags);
		// console.log(values);
		console.log("TRUE: " + filterValue);

		const filteredItems = allTags.filter((tags: string | string[]) => tags.includes(filterValue));

		// const showProducts = res + filteredItems;

		setSearchTag(filteredItems);
		console.log(searchTag);

		const showValues = res.foods;
		// console.log(showValues)

		setShowClickedFilter(showValues);
		setData([]);
	};

	useEffect(() => {
		const genGetAllProducts = async () => {
			await getAllProducts();
		};
		genGetAllProducts();

		// const response = await fetch(url);
		// const res = await response.json();
		// const allTags = res.foods.map((res: { tags: unknown; }) => res.tags)
		// const showProducts = [...res, ...allTags]
		// setProducts(showProducts);

	}, []);

	return(
		<>
			<Map></Map>

			<Search name="Sök efter plats..."
				filtered
				onClick={handleClick}
				setFilterValue={setFilterValue}
				value1={value1}
				value2={value2}
				value3={value3}
				value4={value4}
				value5={value5}
				value6={value6}
			></Search>

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

				{/* <Advertisement></Advertisement> */}
			</section>

			<Link to={"/product/new"} className="my-4 flex flex-col items-center"><Button>Lägg upp egen annons</Button></Link>
		</>
	);
}