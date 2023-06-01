import mongoose from "mongoose";

export interface IFood {
	title: string,
	desc?: string,
	location: string,
	price?: number,
	img: string,
	expire?: [string, number], //FEL SYNTAX
	tags?: string[],
	is_sold?: boolean
}

interface foodModelInterface extends mongoose.Model<FoodDoc> {
	build(attr: IFood): FoodDoc
}

export interface FoodDoc extends mongoose.Document {
	title: string,
	desc: string,
	location: string,
	price?: number,
	img?: string,
	expire: [string, number], //FEL SYNTAX
	tags?: string[],
	is_sold: boolean
}

export const foodSchema = new mongoose.Schema({

	title: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: false,
		default: 0
	},
	img: {
		type: String,
		required: true
	},
	expire: {
		type: [String, Number], //FEL SYNTAX
		required: true
	},
	tags: {
		type: [String],
		required: false
	},
	is_sold: {
		type: Boolean,
		required: false,
		default: false
	}
});

foodSchema.statics.build = (attr: IFood) => {
	return new Food(attr);
};


const Food = mongoose.model<FoodDoc, foodModelInterface>("Food", foodSchema);

Food.build({
	title: "Piggelin",
	desc: "Glass",
	location: "place_id",
	price: 20,
	img: "piggelin.jpg",
	expire: ["Tillagningsdatum", Date.now()],
	tags: ["glass", "kall", "summer23"],
	is_sold: false
});

/*export function newdate() {
	const d = new Date();
	return [d.getTime(), d.toISOString()];
}*/

export { Food };