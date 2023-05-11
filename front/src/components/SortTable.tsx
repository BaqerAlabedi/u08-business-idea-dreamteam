import { useState } from "react";
import Table, { DataItem } from "./Table";
import { TableProps } from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";



function SortableTable(props : TableProps) {
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // set initial value to "asc"
	const [sortBy, setSortBy] = useState<string>(""); // set initial value to ""

	const { config, data } = props;

	// Click event handler for column header
	const handleClick = (label: string) => {
		if (sortBy !== label){
			setSortOrder("asc");
			setSortBy(label);
			return;
		}
		// Toggle sort order if the same column is clicked
		if (sortOrder === "asc") {
			setSortOrder("desc");
		} else if (sortOrder === "desc") {
			setSortOrder("asc");
		}
	};

	// Generate updated column configuration with sorting indicators
	const updatedConfig = config.map((column) => {
		if (!column.sortValue){
			return column;
		}

		return {
			...column,
			header: () => (
				<th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
					<div className="flex items-center">
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>)
		};
	});

	let sortedData = data;
	if (sortBy) {
		// Sort data if sortBy is not an empty string
		const column = config.find((column) => column.label === sortBy);

		if (column && column.sortValue) {
			// Retrieve sortValue function from the column
			const sortValue: ((item: DataItem) => JSX.Element | string | undefined | number) | undefined = column.sortValue;

			// Perform sorting based on the sortValue function and sortOrder
			sortedData = [...data].sort((a, b) => {
				const valueA = sortValue?.(a);
				const valueB = sortValue?.(b);
				const reverseOrder = sortOrder === "asc" ? 1 : -1;

				if (typeof valueA === "string" && typeof valueB === "string") {
					return valueA.localeCompare(valueB) * reverseOrder;
				} else if (typeof valueA === "number" && typeof valueB === "number") {
					return (valueA - valueB) * reverseOrder;
				} else {
					return 0;
				}
			});
		}
	}

	return (
		<Table {...props} data={sortedData} config={updatedConfig}></Table>
	);
}

// Render sorting icons based on column and sort order
function getIcons(label: string, sortBy: string, sortOrder: string) {
	if (label !== sortBy){
		return (
			<div>
				<GoArrowSmallUp></GoArrowSmallUp>
				<GoArrowSmallDown></GoArrowSmallDown>
			</div>
		);
	}
	if (sortOrder === "asc") {
		return (
			<div>
				<GoArrowSmallUp></GoArrowSmallUp>
			</div>
		);
	} else if (sortOrder === "desc"){
		return (
			<div>
				<GoArrowSmallDown></GoArrowSmallDown>
			</div>
		);
	}
}

export default SortableTable;