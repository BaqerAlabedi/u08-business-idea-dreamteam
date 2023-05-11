import { useState } from "react";
import SortTable from "../components/SortTable";
import { DataItem } from "../components/Table";
import { FaAngleDown, FaAngleUp} from "react-icons/fa";


function Conversation () {
	const [toggle, setToggle] = useState(false)
	// FAKE DATA - ta bort när man har data
	const data: DataItem[] = [
		{dishes: "Maträtt 1", adress: "Adress 1 med gata 1", time: Date.now()},
		{dishes: "Maträtt 2", adress: "Adress 2 med gata 2", time: Date.now()},
		{dishes: "Maträtt 3", adress: "Adress 3 med gata 3", time: Date.now()},
	];

	const config = [
		{
			label: "Maträtt",
			render: (vegetable: DataItem) => <>{vegetable.dishes}</>,
			sortValue: (vegetable: DataItem) => vegetable.dishes
		},
		{
			label: "Adress",
			render: (vegetable: DataItem) => <>{vegetable.adress}</>,
			sortValue: (vegetable: DataItem) => vegetable.adress
		},
		{
			label: "Tid",
			render: (vegetable: DataItem) => <>{vegetable.time}</>,
			sortValue: (vegetable: DataItem) => vegetable.time
		},
	];
	const getKey = (item: DataItem) => item.dishes || "";

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return(
		<div className="w-10/12 mx-auto">
			<section className="">
				<div className="flex">
					{toggle ? <FaAngleDown onClick={handleToggle} className="self-center"></FaAngleDown> : <FaAngleUp onClick={handleToggle} className="self-center"></FaAngleUp>}
					<h2 className="m-3">Historiska köp</h2>
				</div>
				{toggle && (<SortTable data={data} config={config} getKey={getKey}></SortTable>)}
			</section>
		</div>
	);
}


export default Conversation;