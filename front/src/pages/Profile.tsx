import { Link } from "react-router-dom";
import Button from "../components/Button";
import { HiPencil } from "react-icons/hi";

function Profile() {
	return (
		<>
			<div className="flex flex-col w-screen justify-evenly lg:flex-row">
				<div className="flex justify-start">
					<img
						src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw0PDw8PDw8PDQ8PDQ8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQYC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDTgqkoAAAAAAACiACoAoIAKACAAKCAAAAAAC4AgAAAAAAEAAAVFBAAVBQQUBQEAAAAAAABRAAAAAAAAAFQAVFQBUUASKAIoAAIKgAAAAAAGgAAAAAAAAAAAKgCiAKAAAAgAAAAAAAAAAAAAAAAAAAAoICgiooAigAAgAAKCAoIAAAAAAAACggqAAACoCiKCKAAAAAIKgAAAAAqAAoIAAogCgCAAAAAAKgAKAigAACKgAAAAAACgAYACKAAgAKAIqAqKAGCAqKgAAAAAACgAACKACKgAAKACCoAoAAAAAAAgKCAAAAAoAigAAAAgoCaKAgKAioAoAAAAACAKgAAAAAAAKIAoAiooIogAuAIAAACgAiooAFAEAAAAAAAAACCgIKCAAAoAYAioAoAAAAAAigiooAIAqAAKCAAAoCCgioAoAIKAgACoAqCggqAoAIKAIqAAAAAqAABAVAAABRAFABAAAABUoCoACgIKAIoCAAAAAAAAAAAAAACgIoAgAAAKgAqgDlQAqAAAAUAVAAUAQoAqUAAAUAH//Z"
						alt="placeholder"
						className="rounded-full w-24 my-6"
					/>
				</div>

				<div className="flex content-start  flex-col ">
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

				<div className="flex justify-end">
					<button>
						<HiPencil />
					</button>
				</div>
			</div>
			<hr className="w-10/12 mx-auto"/>
			<div className="flex justify-center">
				<Link to={"/product/new"}><Button>Lägg till ny annons</Button></Link>
			</div>

		</>
	);
}

export default Profile;
