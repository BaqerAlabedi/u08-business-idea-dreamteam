import { useState } from "react";
import { create } from "zustand";
import Dashboard from "../pages/Dashboard";

// const url = "http://localhost:4000/products";

export const GeolocationStore = create((set)) => {
	handleLocation: ()


// 	const [lat, setLat] = useState(null);
//   const [lng, setLng] = useState(null);
//   const [status, setStatus] = useState(null);

//   const getLocation = () => {
//     if(!navigator.geolocation) {
//       setStatus("Geolocation is not supported by your browser!");
//     } else {
//       setStatus("Loading...");
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setStatus("");
//         setLat(position.coords.latitude);
//         setLng(position.coords.longitude);
//       },
//       () => {
//         setStatus("Unable to retrieve your location");
//       }
//     );
//   };

	// handleLocationClick: async () => {
	// 		if (navigator.geolocation) {
	// 			status("Loading...");
	// 		}
	
	// 		navigator.geolocation.getCurrentPosition(
	// 			async (position) => {
	// 				const lat = position.coords.latitude;
	// 				const lng = position.coords.longitude;
	// 				const curPosition = lat + "," + lng;
	
	// 				const resp = await fetch((curPosition));
	// 				const data = await resp.json();
	// 				status("");
	// 				location(data);
	// 			},
	// 			() => {
	// 				return status("Unable to retrieve your location. Tap Allow to let the app use location information as needed");
	// 			}
	// 		);
	// 	};

	// const [status, setStatus] = useState("");
	// const [location, setLocation] = useState("");

	// const handleLocationClick = async () => {
	// 	if (navigator.geolocation) {
	// 		setStatus("Loading...");
	// 	}

	// 	navigator.geolocation.getCurrentPosition(
	// 		async (position) => {
	// 			const lat = position.coords.latitude;
	// 			const lng = position.coords.longitude;
	// 			const curPosition = lat + "," + lng;

	// 			const resp = await fetch(url(curPosition));
	// 			const data = await resp.json();
	// 			setStatus("");
	// 			setLocation(data);
	// 		},
	// 		() => {
	// 			return setStatus("Unable to retrieve your location. Tap Allow to let the app use location information as needed");
	// 		}
	// 	);
	// };

    // handleLocationClick();

	// return (
	// 	<>
	// 		<div>
	// 			{status ? ( <p className="flex justify-center text-xl">{status}</p> ) : ( <></> )}
	// 		</div>
	// 	</>
	// )
};