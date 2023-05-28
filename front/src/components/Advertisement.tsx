import { Products } from "../pages/Dashboard";
import ProductShow from "./ProductShow";

export const Advertisement = (props: { item: Products }) => {
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