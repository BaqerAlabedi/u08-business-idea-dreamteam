import axios from "axios";

interface UpdateUserProps {
    first_name: string,
    surname: string,
    address: string
}
interface ProductProps{
	title: string,
	desc: string,
	location: [number, number],
	free: boolean,
	price: number,
	img: string,
	expire: [string, number],
	tags: string[]
}

export const getAllUserInfo = async (userID: string) => {
	try {
		const response = await axios.get(`http://localhost:4000/users/${userID}/info`);
		return response.data;
	} catch (error) {
		throw new Error(`userLogin request failed: ${error}`);
	}
};

export const userLogin = async (email: string, pass: string) => {
	try {
		const response = await axios.post("http://localhost:4000/login", {
			email,
			pass,
		});
		return response.data;
	} catch (error) {
		throw new Error(`userLogin request failed: ${error}`);
	}
};

export const userRegister = async (email: string, firstname:string, surname:string, pass: string, pass_confirmed:boolean) => {
	try {
		const response = await axios.post("http://localhost:4000/register", {
			email,
			firstname,
			surname,
			pass,
			pass_confirmed,
		});
		return response.data;
	} catch (error) {
		throw new Error(`userLogin request failed: ${error}`);
	}
};

export const getProducts = async () => {
	try {
		const response = await axios.get("http://localhost:4000/products");
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const getOneProduct = async (productID:string) => {
	try {
		const response = await axios.get(`http://localhost:4000/products/${productID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const getConversations = async (productID:string) => {
	try {
		const response = await axios.get(`http://localhost:4000/conversations/${productID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const getChatMessages = async (productID:string, userID:string) => {
	try {
		const response = await axios.get(`http://localhost:4000/conversations/${productID}/${userID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const newChat = async (productID:string, userID:string) => {
	try {
		const response = await axios.post(`http://localhost:4000/conversations/${productID}/${userID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const newChatMessages = async (productID:string, userID:string) => {
	try {
		const response = await axios.put(`http://localhost:4000/conversations/${productID}/${userID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const updateProductSoldStatus = async (productID:string) => {
	try {
		const response = await axios.put(`http://localhost:4000/conversations/${productID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const getOneUser = async (userID:string) => {
	try {
		const response = await axios.get(`http://localhost:4000/users/${userID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

// export const updateOneUser = async (userID:string) => {
// 	try {
// 		const response = await axios.put(`http://localhost:4000/users/${userID}`);
// 		return response.data;
// 	} catch (error) {
// 		throw new Error(`chatAPI request failed: ${error}`);
// 	}
// };

export const deleteOneUser = async (userID:string) => {
	try {
		const response = await axios.delete(`http://localhost:4000/users/${userID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const updateOneProduct = async (productID:string) => {
	try {
		const response = await axios.put(`http://localhost:4000/products/${productID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const deleteOneProduct = async (productID:string) => {
	try {
		const response = await axios.delete(`http://localhost:4000/products/${productID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const createOneProduct = async ({title, desc, location, free, price, img, expire, tags}:ProductProps) => {
	try {
		const response = await axios.post("http://localhost:4000/products", {
			title,
			desc,
			location,
			free,
			price,
			img,
			expire,
			tags
		});
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};


export const updateOneUser = async (_userID:string, props:UpdateUserProps) => {
	const { first_name, surname, address }  = props;

	try {
		const response = await axios.put("http://localhost:4000/users/${userID}", {
			first_name,
			surname,
			address,
		});
		return response.data;
	} catch (error) {
		throw new Error("chatAPI request failed: ${error}");
	}
};