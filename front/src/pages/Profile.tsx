import React, { Children } from "react";
import Button from "../components/Button";
import { HiPencil } from "react-icons/hi";

interface ProfilbildProps {
  imageUrl: string;
}

const Profilbild: React.FC<ProfilbildProps> = ({ imageUrl }) => {
	return (
		<>
			<div className="flex justify-center">
				<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw0PDw8PDw8PDQ8PDQ8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQYC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDTgqkoAAAAAAACiACoAoIAKACAAKCAAAAAAC4AgAAAAAAEAAAVFBAAVBQQUBBQEAAAAAAABRAAAAAAAAAFQAVFQBUUASKAIoAAIKgAAAAAAGgAAAAAAAAAAAKgCiAKAAAAgAAAAAAAAAAAAAAAAAAAAoICgiooAigAAgAAKCAoIAAAAAAAACggqAAACoCiKCKAAAAAIKgAAAAAqAAoIAAogCgCAAAAAAKgAKAigAACKgAAAAAACgAYACKAAgAKAIqAqKAGCAqKgAAAAAACgAACKACKgAAKACCoAoAAAAAAAgKCAAAAAoAigAAAAgoCaKAgKAioAoAAAAACAKgAAAAAAAKIAoAiooIogAuAIAAACgAiooAFAEAAAAAAAAACCgIKCAAAoAYAioAoAAAAAAigiooAIAqAAKCAAAoCCgioAoAIKAgACoAqCggqAoAIKAIqAAAAAqAABAVAAABRAFABAAAABUoCoACgIKAIoCAAAAAAAAAAAAAACgIoAgAAAKgAqgDlQAqAAAAUAVAAUAQoAqUAAAUAH//Z"
					alt="placeholder"
					className="rounded-full w-24 my-6" />
			</div>
			<button>
				<HiPencil />
			</button>
			<dl className="mt-4">
				<dt className="font-bold">Email</dt>
				<dd>Bager@chas.se</dd>
			</dl>
			<dl className="mt-2">
				<dt className="font-bold">För&Efternam</dt>
				<dd>Bager Al-abedi</dd>
			</dl>
			<dl className="mt-2">
				<dt className="font-bold">Adress</dt>
				<dd>Glannshammarsgatan 48</dd>
			</dl>

			<Button
				children={"Ny annons"}
				className={"mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"}
			></Button>
		</>
	);
};



export default Profilbild;
