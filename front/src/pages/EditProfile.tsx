import Input from "../components/Input";
import Button from "../components/Button";
import { BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";
export interface UserId {
	map(arg0: (data: {
        data: Element;
        _id: string;  img: string; first_name: string; surname: string; address: string | null;
}) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
	_id: string;
	first_name: string;
	surname: string;
	address: string;
	img: string;

  }



function EditProfile() {
	const [result, setResult] = useState<UserId|null>(null);

	const getOneuser = async () => {
		const response = await fetch("http://localhost:4000/users/${userID}");
		const res = await response.json();
		console.log(res);
		setResult(res.user);
	};

	useEffect(() => {
		const GetuserInfo = async () => {
			await getOneuser();
		};
		GetuserInfo();
	}, []);
	console.log(result);
	return (

		<div className="m-6">
			{/* {result && Object.values(result).map((data) => (
				<article key={data._id}>
					<h2>{data.first_name}</h2>
					<p>{data.surname}</p>
					<p> {data.adress}</p>
				</article>
			))} */}


			<div className="block float-left">
				<a href="/">
					<button className="min-[800px]:hidden">
						<BsArrowLeft size={25}></BsArrowLeft>
					</button>
					<button className="max-[800px]:hidden">
						<MdKeyboardArrowLeft size={40}></MdKeyboardArrowLeft>
					</button>
				</a>
			</div>
			<div className="flex justify-center items-center my-2">
				<div className="flex">
					<h2 className="text-xl font-bold">
                    Ändra profil</h2>
				</div>
			</div>
			<div className="min-[800px]:flex justify-center items-start">
				<div className="flex justify-center min-[800px]:mx-20">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="
						alt="placeholder"
						className="rounded-full w-24 my-6" />
				</div>
				<div className="flex justify-center items-center mb-5">
					<div className="flex justify-center items-center">
						<form className="lg:flex min-[320px]:block">
							<div className="lg:mr-20">
								{result && Object.values(result).map((data) =>
									<><div className="min-[800px]:flex">

										<div className="min-[800px]:mx-2">

											<Input placeHolder={""} inputID={"email"} labelText={"Email"}></Input>
										</div>
										<div className="min-[800px]:mx-2">
											<Input placeHolder={data.first_name} inputID={""} labelText={"Förnamn"}></Input>
										</div>
									</div><div className="min-[800px]:flex">
										<div className="min-[800px]:mx-2">
											<Input placeHolder={data.surname} inputID={""} labelText={"Efternamn"}></Input>
										</div>
										<div className="min-[800px]:mx-2">
											<Input placeHolder={data.address} inputID={""} labelText={"Adress"}></Input>
										</div>
									</div><div className="flex justify-center mt-2 min-[800px]:justify-end">
										<div className="block m-2">
											<Button children={"Spara uppgifter"} className={""}></Button>
										</div>
									</div></>
								)};
							</div>
						</form>
					</div>
				</div>
			</div>
			<hr className="w-full" />
			<div className="flex justify-center my-5">
				<Button red>Ta bort konto</Button>
			</div>
		</div>
	);
}
export default EditProfile;