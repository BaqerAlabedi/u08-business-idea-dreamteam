import Input from "../components/Input";
import Button from "../components/Button";
import { BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";

export function EditProfile() {
	return (
		<div className="m-6">
			<div className="float-left">
				<a href="/">
					<button className="lg:hidden mr-20 max-[400px]:mr-30">
						<BsArrowLeft size={25}></BsArrowLeft>
					</button>
					<button className="max-[800px]:hidden">
						<MdKeyboardArrowLeft size={40}></MdKeyboardArrowLeft>
					</button>
				</a>
			</div>
			<div className="flex">
				<div className="flex justify-center">
					<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw0PDw8PDw8PDQ8PDQ8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQYC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDTgqkoAAAAAAACiACoAoIAKACAAKCAAAAAAC4AgAAAAAAEAAAVFBAAVBQQUBBQEAAAAAAABRAAAAAAAAAFQAVFQBUUASKAIoAAIKgAAAAAAGgAAAAAAAAAAAKgCiAKAAAAgAAAAAAAAAAAAAAAAAAAAoICgiooAigAAgAAKCAoIAAAAAAAACggqAAACoCiKCKAAAAAIKgAAAAAqAAoIAAogCgCAAAAAAKgAKAigAACKgAAAAAACgAYACKAAgAKAIqAqKAGCAqKgAAAAAACgAACKACKgAAKACCoAoAAAAAAAgKCAAAAAoAigAAAAgoCaKAgKAioAoAAAAACAKgAAAAAAAKIAoAiooIogAuAIAAACgAiooAFAEAAAAAAAAACCgIKCAAAoAYAioAoAAAAAAigiooAIAqAAKCAAAoCCgioAoAIKAgACoAqCggqAoAIKAIqAAAAAqAABAVAAABRAFABAAAABUoCoACgIKAIoCAAAAAAAAAAAAAACgIoAgAAAKgAqgDlQAqAAAAUAVAAUAQoAqUAAAUAH//Z"
						alt="placeholder"
						className="rounded-full w-24 my-6" />
				</div>
			</div>
			<div className="flex justify-center items-center mb-5">
				<div className="flex justify-center items-center">
					<form className="lg:flex min-[320px]:block">
						<div className="lg:mr-20">
							<Input placeHolder={""} inputID={"email"} labelText={"Email"}></Input>
							<Input placeHolder={""} inputID={"firstName"} labelText={"Förnamn"}></Input>
							<Input placeHolder={""} inputID={"lastName"} labelText={"Efternamn"}></Input>
							<Input placeHolder={""} inputID={"address"} labelText={"Adress"}></Input>
						</div>
						<div className="flex justify-center mt-2">
							<div className="block m-2">
								<Button children={"Spara"} className={""}></Button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<hr className="w-full" />
			<div className="flex justify-center my-5">
				<Button children={"Ta bort konto"} className={""}></Button>
			</div>
		</div>
	);
}