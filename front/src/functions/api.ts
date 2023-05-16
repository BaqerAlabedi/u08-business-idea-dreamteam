import axios from "axios";

export type MyErrorResponse = {
	errors: { detail: string }[];
  };

export function loginAPI() {
	return console.log("hej");
}

export const chatAPI = async (productID:string, userID:string) => {
	try {
		const response = await axios.get(`http://localhost:4000/conversations/${productID}/${userID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

