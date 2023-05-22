import Input from "../components/Input";
import Button from "../components/Button";
import { BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

function CreateProduct() {
	return (
		<div className="max-w-5xl mx-auto">
			<div className="flex justify-center items-center my-4">
				<div className="min-[800px]:mr-72">
					<Link to="/profile">
						<button className="md:hidden mr-20 max-[350px]:mr-22">
							<BsArrowLeft size={25}></BsArrowLeft>
						</button>
						<button className="max-[800px]:hidden">
							<MdKeyboardArrowLeft size={40}></MdKeyboardArrowLeft>
						</button>
					</Link>
				</div>
				<h2 className="flex min-[800px]:mr-72 text-xl font-bold mr-28">Ny annons</h2>
			</div>
			<div className="flex justify-center items-center">
				<form className="lg:flex min-[320px]:block">
					<div className="lg:mr-20">
						<Input inputID={"titel"} labelText={"Rubrik"}></Input>
						<div className="flex flex-col my-4">
							<label htmlFor="desc">Beskrivning</label>
							<textarea className="box-border w-72 rounded border-solid border-gray-300 border p-2" id="desc" name="desc" rows={6} maxLength={300}>
							</textarea>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<Input inputID="address" labelText="Address"></Input>
						<Input type="file" inputID="img" labelText="Välj en bild"></Input>
						<div>
							<label htmlFor="price" className="block my-2">Pris</label>
							<label htmlFor="free" className="text-sm mx-2">Bortskänkes</label>
							<input type="checkbox" id="free"/>
							<input type="number" id="price" className="block my-2 box-border h-11 w-72 rounded border-solid border-gray-300 border"/>
						</div>

						<label htmlFor="dates" className="block my-2">Tillagning/utgångsdatum</label>
						<select id="dates" className="block my-2 px-5 box-border h-11 rounded border-solid border-gray-300 border">
							<option value="tillagning">Tillagningsdatum</option>
							<option value="utgångsdatum">Utgångsdatum</option>
						</select>
						<input type="date" id="dates" className="block mt-2 mb-5 px-6 box-border h-11 rounded border-solid border-gray-300 border"/>

						<div className="block">
							<Button>Spara annons</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateProduct;