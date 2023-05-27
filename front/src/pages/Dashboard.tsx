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
	const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

	const getAllProducts = async () => {
		const response = await fetch(url);
		const res = await response.json();
		setData(res.foods);
	};

	const handleClick = async (filter:string) => {
		const resp = await fetch(url);
		const res = await resp.json();

		const allTags = res.foods.map((res: { tags: unknown; }) => res.tags);
		// console.log(allTags);

		setValues(allTags);
		console.log("TRUE: " + filter);

		const filteredItems = allTags.filter((tags: string[]) => tags.includes(filter));

		setSearchTag(filteredItems);
		// setFilteredProducts(searchTag);
		console.log("SearchTag",searchTag);

		if (searchTag) {
			setData([]);
			return (
				data.map((item) => (
					console.log(data),
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

				))
			);
		}
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

			<Search name="Sök efter plats..."
				filtered
				onClick={handleClick}
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

				{ searchTag}{searchTag.length < 3 && <Advertisement></Advertisement>}

				{/* <Advertisement></Advertisement> */}
			</section>

			<Link to={"/product/new"} className="my-4 flex flex-col items-center"><Button>Lägg upp egen annons</Button></Link>
		</>
	);
}
