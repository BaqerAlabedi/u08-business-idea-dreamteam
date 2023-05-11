function ConversationWidget(){
	return(
		<div>
			<div className="flex justify-between">
				<div className="flex w-5/6">
					<img
						src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
						alt=""
						className="h-12 w-12 rounded-full mx-4"/>
					<div className="w-4/6">
						<h3 className="font-semibold">Namn</h3>
						<p className="truncate">Hejhej jag vill hämta din maträtt</p>
					</div>
				</div>
				<p className="w-1/6 max-w-fit md:mx-4">1 km</p>
			</div>
			<hr className="my-4" />
		</div>
	);
}

export default ConversationWidget;