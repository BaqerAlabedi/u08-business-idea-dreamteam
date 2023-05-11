import { useState } from "react";
import SortTable from "../components/SortTable";
import { DataItem } from "../components/Table";
import { FaAngleDown, FaAngleUp} from "react-icons/fa";
import ConversationWidget from "../components/ConversationWidget";


function Conversation () {
	const [toggle, setToggle] = useState(true);

	// FAKE DATA - ta bort när man har data
	const data: DataItem[] = [
		{dishes: "Maträtt 1", adress: "Adress 1 med gata 1", time: Date.now()},
		{dishes: "Maträtt 2", adress: "Adress 2 med gata 2", time: Date.now()},
		{dishes: "Maträtt 3", adress: "Adress 3 med gata 3", time: Date.now()},
	];
	const formatTime = (time: number) => {
		const date = new Date(time);
		const day = date.getDate();
		const month = date.getMonth() + 1; // Months are zero-based
		return `${day}/${month}`;
	};

	const config = [
		{
			label: "Maträtt",
			render: (item: DataItem) => <>{item.dishes}</>,
			sortValue: (item: DataItem) => item.dishes
		},
		{
			label: "Adress",
			render: (item: DataItem) => <>{item.adress}</>,
			sortValue: (item: DataItem) => item.adress
		},
		{
			label: "Datum",
			render: (item: DataItem) => <>{formatTime(item.time)}</>,
			sortValue: (item: DataItem) => item.time
		},
	];
	const getKey = (item: DataItem) => item.dishes || "";

	const handleToggle = () => {
		setToggle(!toggle);
	};


	return(
		<div className="w-10/12 mx-auto max-w-5xl">
			<section className="flex flex-col justify-center">
				<h2 className="m-3 text-xl font-semibold text-center md:text-start">Konversationer</h2>
				{/* Ta bort sen */}
				<div className="m-3 mx-auto w-72 h-11 bg-gray-200 rounded"></div>
				<ConversationWidget></ConversationWidget>
				<ConversationWidget></ConversationWidget>
				<ConversationWidget></ConversationWidget>
				<ConversationWidget></ConversationWidget>
			</section>
			<section className="">
				<div className="flex justify-center md:justify-start">
					{toggle ? <FaAngleDown onClick={handleToggle} className="self-center text-lg"></FaAngleDown> : <FaAngleUp onClick={handleToggle} className="self-center text-lg"></FaAngleUp>}
					<h2 className="m-3 font-semibold text-xl">Historiska köp</h2>
				</div>
				{toggle && (<SortTable data={data} config={config} getKey={getKey}></SortTable>)}
			</section>
		</div>
	);
}


export default Conversation;