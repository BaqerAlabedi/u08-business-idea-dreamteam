import axios from "axios";

export const getAllUserInfo = async (userID: string) => {
	try {
		const response = await axios.get(`http://localhost:4000/products/${userID}`);
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


export const getChatMessages = async (productID:string, userID:string) => {
	try {
		const response = await axios.get(`http://localhost:4000/conversations/${productID}/${userID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

