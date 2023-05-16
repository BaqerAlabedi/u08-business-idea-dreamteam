import Input from "../components/Input";
import Button from "../components/Button";
import { BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";

export function EditProduct() {
	return (
		<div className="m-8">
			<div className="block float-left">
				<a href="/">
					<button className="min-[800px]:hidden">
						<BsArrowLeft size={25}></BsArrowLeft>
					</button>
					<button className="max-[800px]:hidden">
						<MdKeyboardArrowLeft size={40}></MdKeyboardArrowLeft>
					</button>
				</a>
			</div>
			<div className="flex justify-center items-center my-2">
				<div className="flex">
					<h2 className="text-xl font-bold">
                    Ändra annons</h2>
				</div>
			</div>
			<div className="flex justify-center items-center mb-10">
				<div className="flex justify-center items-center">
					<form className="lg:flex min-[320px]:block">
						<div className="lg:mr-20">
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

							<label htmlFor="price" className="block my-2">Pris</label>
							<input type="checkbox" id="give-away"/>
							<label htmlFor="give-away" className="text-sm mx-2">Bortskänkes</label>
							<input type="number" id="price" className="block my-2 box-border h-11 w-72 rounded border-solid border-gray-300 border"/>

							<label htmlFor="dates" className="block my-2">Tillagning/utgångsdatum</label>
							<select id="dates" className="block my-2 px-5 box-border h-11 rounded border-solid border-gray-300 border">
								<option value="tillagning">Tillagningsdatum</option>
								<option value="utgångsdatum">Utgångsdatum</option>
							</select>
							<input type="date" id="dates" className="block mt-2 mb-5 px-6 box-border h-11 rounded border-solid border-gray-300 border"/>

							<div className="flex justify-center min-[800px]:block">
								<Button children={"Uppdatera annons"} className={""}></Button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<hr className="w-full" />
			<div className="flex justify-center my-5">
				<Button children={"Radera annons"} className={""}></Button>
			</div>
		</div>
	);
}