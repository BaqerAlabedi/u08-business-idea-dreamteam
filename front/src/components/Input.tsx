interface Props {
	placeHolder: string;
	inputID: string;

	opacity?: number;
	labelText?: string;

}

const styling = "box-border h-11 w-72 rounded border-solid border-gray-300 border";

export default function Input(props:Props)
{

	return (
		<div className="flex flex-col">
			{props.labelText ?
				<label htmlFor={props.inputID}>{props.labelText}</label>
				:
				null}
			<input style={{opacity: props.opacity}} id={props.inputID} placeholder={props.placeHolder} className={styling}></input>
		</div>

	);
}