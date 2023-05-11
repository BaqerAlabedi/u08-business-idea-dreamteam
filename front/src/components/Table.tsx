import { Key } from "react";
import { Fragment } from "react";

// Defines the configuration for a column in the table
interface ColumnConfig {
    label: string; // The text label to display in the table header
    render: (item: DataItem) => JSX.Element; // A function to render the column's data for a given item
    header?: () => JSX.Element; // An optional function to render the header for the column
    sortValue?: ((item: DataItem) => JSX.Element | string | undefined | number) | undefined;
}

// Defines the props for the Table component
export interface TableProps {
    data: DataItem[];
    config: ColumnConfig[];
    getKey: (item: DataItem) => Key;
}

// Defines the data item type for the table
export interface DataItem {
    dishes: string;
    adress: string;
    time: number;
}

function Table({ data, config, getKey }: TableProps) {
    // Renders the rows of the table
	const renderedRows = data.map((item) => {
        // Renders the cells for each row
		const cells = config.map((column) => {
			return <td key={column.label} className="p-3">{column.render(item)}</td>;
		});
        // Returns a row with the cells and a unique key
		return <tr key={getKey(item)} className="border-b">{cells}</tr>;
	});

    // Renders the headers of the table
	const renderedHeaders = config.map((column) => {
        // Renders the header for each column, using the optional header function if provided
		if (column.header) {
			return <Fragment key={column.label}>{column.header()}</Fragment>;
		}
		return <th key={column.label}>{column.label}</th>;
	});

    // Returns the table component with the rendered headers and rows
	return (
		<table className="table-auto border-spacing-2">
			<thead>
				<tr className="border-b-2">{renderedHeaders}</tr>
			</thead>
			<tbody>{renderedRows}</tbody>
		</table>
	);
}

export default Table;
