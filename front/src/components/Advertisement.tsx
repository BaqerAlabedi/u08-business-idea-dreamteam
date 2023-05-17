import ProductShowNew from "./ProductShowNew";

export const Advertisement = () => {
	return (
		<>
			<div className="w-10/12 max-w-7xl mx-auto my-4 grid col-auto gap-5 lg:grid-cols-2">
				<ProductShowNew imgUrl={"https://imbo.vgtv.no/users/ab_/images/a30a8e9a7fcd2852e8b35cfab6a00913.jpg?t[]=1440x810q80"}
					title={"Lyssna på de senaste nyheterna"}
					description={"Aftonbladet.se"}
					add={true}
					visible={false}
				></ProductShowNew>
			</div>
		</>
	);
};