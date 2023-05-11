import SortTable from "../components/SortTable";
import { DataItem } from "../components/Table";

function Conversation () {
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

	return(
		<div className="w-10/12 mx-auto">
			<section className="">
				<h2>Historiska köp</h2>
				<SortTable data={data} config={config} getKey={getKey}></SortTable>
			</section>
		</div>
	);
}


export default Conversation;