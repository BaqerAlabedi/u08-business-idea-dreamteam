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
				msg: "Hej jag vill köpa din vara",
				time: Date.now()
			},
			{
				id: 2,
				user: 212,
				msg: "Okej du kan hämta klockan 14",
				time: Date.now()
			},
			{
				id: 3,
				user: 111,
				msg: "Okej kan vi säga klockan 13? Eller blir det för tidigt för dig?",
				time: Date.now()
			},
			{
				id: 4,
				user: 111,
				msg: "Jag antar att det blir för tidigt. Vi säger klockan 14",
				time: Date.now()
			},
		]
	};

	const formatTime = (time: number) => {
		const date = new Date(time);
		return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
	};

	return (
		<div className="w-10/12 mx-auto max-w-5xl">
			<section className="mt-5 flex justify-between">
				<FaAngleLeft className="text-2xl" />
				<div className="flex flex-col text-center">
					<h2 className="text-xl font-semibold">{props.title}</h2>
					<h3 className="text-lg">{props.buyer}</h3>
				</div>
				<FaExclamation className="text-xl text-red-700" />
			</section>
			<section className="mt-5">
				{props.chat.map((message) => (
					<div
						key={message.id}
						className={`flex justify-${message.user === 111 ? "start" : "end"} mb-4`}
					>
						<div
							className={`${
								message.user === 111 ? "bg-teal-700/50" : "bg-gray-200"
							} rounded-lg p-3 max-w-xs`}
						>
							<div className="flex flex-col">
								<span className="text-sm">{message.msg}</span>
								<span className="mt-1 text-xs text-gray-700 text-right">{formatTime(message.time)}</span>
							</div>
						</div>
					</div>
				))}
			</section>
			<hr />
		</div>
	);
}

export default Chat;
