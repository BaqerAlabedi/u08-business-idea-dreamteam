interface Props {
	className: string;
	placeHolder: string;
	inputID: string;
	
	
	opacity?: number;
	labelText?: string;
	
}

const def = "box-border h-10 w-80 rounded border-solid border-gray-300 border";

export default function Input(props:Props)
{

	
	return (
		
		<div className="flex flex-col font-inter">
		{props.labelText ? 
		<label htmlFor={props.inputID}>{props.labelText}</label>
		:
		null}
		<input style={{opacity: props.opacity}} id={props.inputID} placeholder={props.placeHolder} className={def + props.className}></input>
		</div>
		
	)
}