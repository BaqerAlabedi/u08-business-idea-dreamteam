import mongoose from "mongoose";

interface IFood {
	title: string,
	desc?: string,
	location: [number, number],
	price?: number,
	img: string,
	expire?: [string, number],
	tags?: string[],
	is_sold?: boolean
}

interface foodModelInterface extends mongoose.Model<FoodDoc> {
	build(attr: IFood): FoodDoc
}

interface FoodDoc extends mongoose.Document {
	title: string,
	desc: string,
	location: [number, number],
	price?: number,
	img?: string,
	expire: [string, number],
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
		type: [String, Number],
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
		type: [String, Number],
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
	location: [45.123, 47.232],
	price: 20,
	img: "piggelin.jpg",
	expire: ["Tillagningsdatum", Date.now()],
	tags: ["glass", "kall", "summer23"],
	is_sold: false
});

export { Food };