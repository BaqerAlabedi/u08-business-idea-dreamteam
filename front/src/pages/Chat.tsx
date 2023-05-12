import { FaAngleLeft, FaExclamation } from "react-icons/fa";

function Chat() {
	const props = {
		title: "Maträttens rubrik",
		buyer: "Köparens namn",
		seller: true,
		chat: [
			{
				id: 1,
				user: 111,
				msg: "Hej jag vill köpa din vara"
			},
			{
				id: 2,
				user: 212,
				msg: "Okej du kan hämta klockan 14"
			},
			{
				id: 3,
				user: 111,
				msg: "Hej jag vill köpa din vara"
			},
			{
				id: 4,
				user: 111,
				msg: "Hej jag vill köpa din vara"
			},
		]
	};
	return(
		<div className="w-10/12 mx-auto max-w-5xl">
			<section className="mt-5 flex justify-between">
				<FaAngleLeft className="text-2xl"></FaAngleLeft>
				<div className="flex flex-col text-center">
					<h2 className="text-xl font-semibold">{props.title}</h2>
					<h3 className="text-lg">{props.buyer}</h3>
				</div>
				<FaExclamation className="text-xl text-red-700"></FaExclamation>
			</section>
		</div>
	);
}

export default Chat;