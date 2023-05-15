import Input from "../components/Input";
import Button from "../components/Button";
import { BsArrowLeft } from "react-icons/bs";

export function CreateProduct() {
	return (
		<div className="createProduct">
			<div className="flex justify-center mt-5 mb-2">
				<a href="/">
					<button>
						<BsArrowLeft size={30}></BsArrowLeft>
					</button>
				</a>
				<h2>Ny annons</h2>
			</div>
			<div className="flex justify-center items-center mb-10">
				<div className="flex justify-center items-center">
					<form className="flex flex-wrap">
						<div>
							<Input placeHolder={""} inputID={"titel"} labelText={"Rubrik"}></Input>
							<Input placeHolder={""} inputID={"description"} labelText={"Beskrivning"}></Input>
						</div>

						<div>
							<label htmlFor="adress" className="block">
                        Address
								<span className="text-neutral-400 text-sm"> (syns ej för andra användare)</span>
							</label>
							<input type="textarea" id="adress" className="box-border h-11 w-72 rounded border-solid border-gray-300 border"/>

							<Input placeHolder={"Välj bild..."} inputID={"image"} labelText={"Bild"}></Input>

							<label htmlFor="price" className="block">Pris</label>
							<input type="checkbox" id="give-away"/>
							<label htmlFor="give-away" className="text-sm">Bortskänkes</label>
							<input type="number" id="price" className="block box-border h-11 w-72 rounded border-solid border-gray-300 border"/>

							<label htmlFor="dates">Tillagning/utgångsdatum</label>
							<select id="dates" className="block box-border h-11 rounded border-solid border-gray-300 border">
								<option value="tillagning">Tillagningsdatum</option>
								<option value="utgångsdatum">Utgångsdatum</option>
							</select>
							<input type="date" id="dates" className="block box-border h-11 rounded border-solid border-gray-300 border"/>

							<div className="block">
								<Button children={"Spara annons"} className={""}></Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}