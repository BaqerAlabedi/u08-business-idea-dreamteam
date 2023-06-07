import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Conversation from "./pages/Conversation";
import Chat from "./pages/Chat";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import EditProduct from "./pages/EditProduct";
import CreateProduct from "./pages/CreateProduct";
import Login from "./pages/login";
import PageNotFound from "./components/PageNotFound";



const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		// errorElement: <PageNotFound/>,
		children: [
			{
				path: "",
				element: <Index/>,
			},
			{
				path: "login",
				element: <Login/>,
			},
			{
				path: "register",
				element: <Register/>,
			},
			{
				path: "dashboard",
				element: <Dashboard/>,
			},
			{
				path: "product/:productID",
				element: <Product/>,
			},
			{
				path: "profile",
				element: <Profile/>,
			},
			{
				path: "profile/edit",
				element: <EditProfile/>,
			},
			{
				path: "product/edit/:productID",
				element: <EditProduct/>,
			},
			{
				path: "product/create",
				element: <CreateProduct/>,
			},
			{
				path: "conversation",
				element: <Conversation/>,
			},
			{
				path: "conversation/:chatID",
				element: <Chat/>,
			},
		],
	},
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<RouterProvider router={router} />
);