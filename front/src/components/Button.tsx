interface Props {
	children: React.ReactNode;
	onClick?: () => void;
	className: string;
}

const def = "border-transparent border-2 hover:border-teal-700 font-bold py-2 px-2 rounded shadow-md ";
export default function Button({children, onClick, className}:Props) {
	return(
		<button onClick={onClick} className={def + className}>{children}</button>
	);
}
