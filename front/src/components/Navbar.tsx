import Button from "../components/Button";
import ReactDOM from "react-dom/client";
import { BsChatLeftTextFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import useStoreUser from "../storage/UserStorage";


const closed = (<>
	<div className="bg-black w-8 h-[.2rem]"/>
	<div className="bg-black w-8 h-[.2rem] my-[.30rem]"/>
	<div className="bg-black w-8 h-[.2rem]"/>
</>);
let is_open = false;
let root:ReactDOM.Root|null = null;


function menu() {
	if (!root) root = ReactDOM.createRoot(document.getElementById("menu") as HTMLElement);
	is_open = !is_open;
	document.getElementById("m-drop")?.classList.toggle("flex");
	document.getElementById("m-nav-close")?.classList.toggle("hidden");
	document.body.classList.toggle("overflow-hidden");

	if (is_open) {
		document.getElementById("m-drop")?.classList.toggle("hidden");
		root.render(<ImCross className="w-full h-full"/>);
	}else {
		document.getElementById("m-drop")?.classList.toggle("animate-poof");
		setTimeout(() => {
			document.getElementById("m-drop")?.classList.toggle("animate-poof");
			document.getElementById("m-drop")?.classList.toggle("hidden");
		}, 300);
		root.render(closed);
	}
}

export default function Navbar() {
	function logout() {
		setStoreUser("");
		navigate("/");
	}
	function is_login() {
		if(storeUser !== "") {
			return true;
		}
		else {
			return false;
		}
	}
	const {storeUser, setStoreUser} = useStoreUser();
	const navigate = useNavigate();

	return (
		<header className="w-screen bg-white/90 sticky top-0 z-10">
			<section className="w-11/12 mx-auto flex justify-between items-center p-4">
				<Link to={is_login() ? "/dashboard" : "/"}>
					<h1 className="text-lg font-semibold">GrannskapsRätten</h1>
				</Link>
				<BsChatLeftTextFill className={`${is_login() ? "" : "hidden "}fill-teal-700 cursor-pointer text-2xl`}/>
				<div>
					<button onClick={menu} id="menu" className="md:hidden w-9 h-[20px]">
						{closed}
					</button>
					<nav className="hidden md:block space-x-8">
						<Link to={is_login() ? "/profile" : "/login"}>
							<Button className="w-32 h-8 text-sm">{is_login() ? "Profil" : "Logga in"}</Button>
						</Link>
						{!storeUser &&
						<Link to="/register">
							<Button white className="w-32 h-8 text-sm">{is_login() ? "Logga ut" : "Bli medlem"}</Button>
						</Link>}
						{storeUser && <Button onClick={logout} white className="w-32 h-8 text-sm">Logga ut</Button>}
					</nav>
				</div>
			</section>

			<section id="m-drop" className="hidden md:hidden absolute z-50 inset-x-0 mx-auto mt-3 bg-white/90 w-72 h-36 text-5xl rounded-md flex-col justify-center animate-drop origin-top">
				<nav aria-label="mobile-nav" className="h-32 w-fit m-auto flex flex-col justify-evenly">
					<Link to={is_login() ? "/profile" : "/login"}>
						<Button className="w-32 h-8 text-sm block">{is_login() ? "Profil" : "Logga in"}</Button>
					</Link>
					<Link to={is_login() ? "/logout" : "/register"}>
						<Button white className="w-32 h-8 text-sm block">{is_login() ? "Logga ut" : "Bli medlem"}</Button>
					</Link>
				</nav>
			</section>
			<div id="m-nav-close" onClick={menu} className="hidden md:hidden absolute z-40 oopacity-0 h-screen w-full"/>
		</header>
	);
}
