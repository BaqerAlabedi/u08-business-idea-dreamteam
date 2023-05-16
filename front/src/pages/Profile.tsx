import { Link } from "react-router-dom";
import Button from "../components/Button";
import { HiPencil } from "react-icons/hi";
import ProductShow from "../components/ProductShow";

function Profile() {
	return (
		<>
			<div className="w-10/12 mx-auto relative max-w-5xl">
				<Link className="absolute  top-5 lg:top-0 right-5 lg:right-24 text-2xl" to={"/profile/edit"}>
					<HiPencil/>

				</Link>
				<div className="lg:flex lg:gap-5 lg:justify-around lg:W-10/12 ">
					<div className="flex justify-center item-center lg:flex lg:justify-start lg:flex-col">
						<img
							src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw0PDw8PDw8PDQ8PDQ8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQYC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDTgqkoAAAAAAACiACoAoIAKACAAKCAAAAAAC4AgAAAAAAEAAAVFBAAVBQQUBQEAAAAAAABRAAAAAAAAAFQAVFQBUUASKAIoAAIKgAAAAAAGgAAAAAAAAAAAKgCiAKAAAAgAAAAAAAAAAAAAAAAAAAAoICgiooAigAAgAAKCAoIAAAAAAAACggqAAACoCiKCKAAAAAIKgAAAAAqAAoIAAogCgCAAAAAAKgAKAigAACKgAAAAAACgAYACKAAgAKAIqAqKAGCAqKgAAAAAACgAACKACKgAAKACCoAoAAAAAAAgKCAAAAAoAigAAAAgoCaKAgKAioAoAAAAACAKgAAAAAAAKIAoAiooIogAuAIAAACgAiooAFAEAAAAAAAAACCgIKCAAAoAYAioAoAAAAAAigiooAIAqAAKCAAAoCCgioAoAIKAgACoAqCggqAoAIKAIqAAAAAqAABAVAAABRAFABAAAABUoCoACgIKAIoCAAAAAAAAAAAAAACgIoAgAAAKgAqgDlQAqAAAAUAVAAUAQoAqUAAAUAH//Z"
							alt="placeholder"
							className="rounded-full w-24 my-6 lg:w-32"
						/>
					</div>

					<div className="lg:flex lg:justify-center lg:flex-col lg:gap-5 lg:w-3/5">
						<dl className="mt-2">
							<dt className="font-bold">Email</dt>
							<dd>Bager@chas.se</dd>
						</dl>
						<dl className="mt-2">
							<dt className="font-bold">För- och Efternamn</dt>
							<dd>Bager Al-abedi</dd>
						</dl>
						<dl className="mt-2">
							<dt className="font-bold">Adress</dt>
							<dd>Glannshammarsgatan 48</dd>
						</dl>
					</div>
				</div>
				<hr className="w-10/12 mx-auto my-5"/>
				<div className="flex justify-center item-center my-5 lg:">
					<Link to={"/product/new"}><Button>Lägg till ny annons</Button></Link>
				</div>
				<h2 className="text-xl my-5 text-semibold">Dina akutella annonser</h2>
				<section className="max-w-5xl mx-auto grid col-auto gap-5 lg:grid-cols-2 ">
					<ProductShow></ProductShow>
					<ProductShow></ProductShow>
					<ProductShow></ProductShow>
				</section>
			</div>
		</>
	);
}

export default Profile;
