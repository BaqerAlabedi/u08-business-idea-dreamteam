import ProductShow from "./ProductShow";

export const Advertisement = () => {
	return (
		<>
			<ProductShow
				imgUrl={"https://www.affarsvarlden.se/wp-content/uploads/2020/10/hellofresh-900.jpg"}
				title={"HelloFresh"}
				description={"Spara på dina 5 första kassar!"}
				add={true}
				visible={false}
			></ProductShow>
		</>
	);
};