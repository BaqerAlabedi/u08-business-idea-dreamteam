interface Props {
	children: React.ReactNode;
	onClick?: () => void;
	red?: boolean;
	className?: string;
}

const def = "border-transparent border-2 font-semibold rounded shadow-md ";
export default function Button({children, onClick, red, className}:Props) {
	let style = (red)
		? def + "border-red-700 bg-white hover:bg-red-700 text-black hover:text-white "
		: def + "bg-teal-700 text-white hover:bg-teal-800 ";
	style += (className) ? className : "w-72 h-11";
	return(
		<button onClick={onClick} className={style}>{children}</button>
	);
}
