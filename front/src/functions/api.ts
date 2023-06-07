import axios from "axios";

interface LoginProps {
	email: string,
	password: string,
}

interface UserUpdateProps{
	first_name: string,
	surname: string,
	address: string,
	img: string
}

interface RegisterProps {
	email: string,
	first_name: string,
	surname: string,
	password: string,
	password_confirmation: string,
}

interface ProductProps{
	title: string,
	desc: string,
	location: string,
	free: boolean,
	price: number,
	img: string,
	expire: string[],
	tags: string[]
}

interface ProductUpdateProps {
    title: string,
    desc: string,
    location: string,
    price: number,
    img: string,
    expire: string[],
    tags: string[],
	is_sold: boolean
}

const url = "http://localhost:4000";

export const getAllUserInfo = async (uid: string) => {
	try {
		const response = await axios.get(`${url}/users/${uid}/info`);
		return response.data;
	} catch (error) {
		throw new Error(`userLogin request failed: ${error}`);
	}
};

export const userLogin = async (props: LoginProps) => {
	const {email, password} = props;
	try {
		const response = await axios.post(`${url}/login`, {
			email,
			password,
		});
		return response.data;
	} catch (error) {
		throw new Error(`userLogin request failed: ${error}`);
	}
};

export const userRegister = async (props : RegisterProps) => {
	const {email, first_name, surname, password, password_confirmation} = props;
	try {
		const response = await axios.post(`${url}/register`, {
			email,
			first_name,
			surname,
			password,
			password_confirmation,
		});
		return response.data;
	} catch (error) {
		throw new Error(`userLogin request failed: ${error}`);
	}
};

export const getProducts = async () => {
	try {
		const response = await axios.get(`${url}/foods`);
		return response.data;
	} catch (error) {
		throw new Error(`getProducts request failed: ${error}`);
	}
};

export const getOneProduct = async (fid:string) => {
	try {
		const response = await axios.get(`${url}/food/${fid}`);
		return response.data;
	} catch (error) {
		throw new Error(`getOneProduct request failed: ${error}`);
	}
};


export const getOneUser = async (uid:string) => {
	try {
		const response = await axios.post(`${url}/user`, {
			uid
		});
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const updateOneUser = async (props:UserUpdateProps, uid:string) => {
	const { first_name, surname, address, img} = props;
	try {
		const response = await axios.patch(`${url}/user/update`, {
			first_name,
			surname,
			address,
			img,
			uid
		}); //ändra uid
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const deleteOneUser = async (uid:string) => {
	try {
		const response = await axios.post(`${url}/user/delete`, {
			uid
		});
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const updateOneProduct = async (props: ProductUpdateProps, fid: string) => {
	const { title, desc, location, price, img, expire,tags, is_sold } = props;
	try {
		const response = await axios.patch(`${url}/food/update`, {
			fid,
			title,
			desc,
			location,
			price,
			img,
			expire,
			tags,
			is_sold
		});
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const deleteOneProduct = async (fid:string, uid: string) => {
	try {
		const response = await axios.post(`${url}/food/delete`, {
			fid,
			uid
		});
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const createOneProduct = async (form_data:any) => {
	console.log("APIII", form_data.getAll("uid"));
	try {
		const response = await axios.put(`${url}/food/create`,
			form_data,
			{ headers: {"content-type": "multipart/form-data"} }
		);
		return;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};




// Använd ej

export const getConversations = async (fid:string) => {
	try {
		const response = await axios.get(`${url}/conversations/${fid}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const getChatMessages = async (fid:string, uid:string) => {
	try {
		const response = await axios.get(`${url}/conversations/${fid}/${uid}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const newChat = async (fid:string, uid:string) => {
	try {
		const response = await axios.post(`${url}/conversations/${fid}/${uid}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const newChatMessages = async (productID:string, uid:string) => {
	try {
		const response = await axios.put(`${url}/conversations/${productID}/${uid}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};

export const updateProductSoldStatus = async (productID:string) => {
	try {
		const response = await axios.put(`${url}/conversations/${productID}`);
		return response.data;
	} catch (error) {
		throw new Error(`chatAPI request failed: ${error}`);
	}
};