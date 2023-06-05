import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { GeolocationStore } from "../storage/GeolocationStore";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";
import { getProducts } from "../functions/api";

export default function Map(data : any) {
	const { currentLocation, setCurrentLocation, setError, setLoading } = GeolocationStore();
	const [markerLocation, setMarkerLocation] = useState([]);

	// console.log(data);
	// const test = data.map(res => console.log(res));
	// console.log(test);

	useEffect(() => {
		setLoading(true);

		navigator.geolocation.getCurrentPosition(
			(position) => {
				let latitude = position.coords.latitude;
				let longitude = position.coords.longitude;
				latitude = Math.round(latitude * 100) / 100;
				longitude = Math.round(longitude * 100) / 100;
				const geoPosition = latitude + "," + longitude;
				setCurrentLocation(geoPosition);
				setLoading(false);
				// const currentPosition = {lat: latitude, lng: longitude};
				// setCenter(currentPosition);

				// console.log(geoPosition);
				// console.log(currentLocation);
			},
			() => {
				setError("Unable to retrieve your location");
				setLoading(false);
			}
		);

		if (!navigator.geolocation) {
			setError("Geolocation is not supported by your browser");
			setLoading(false);
		}

		// const test = data.map((res: { location: any; }) => res.location);
		// setMakers(test)
		// console.log(markers)
		// console.log(test);

	}, [setError, setLoading, setCurrentLocation]);

	const renderMarkers = async () => {
		console.log(data);

		const test = Object.values(data);
		const test2 = Object.values(test);
		// const test2 = test.map(res => res);
		console.log(test2);

		// const location = [];
		// console.log(data);
		// for(let i = 0; i < data.length; i++)
		// {
		// 	geocodeByPlaceId(data[i].location)
		// 		.then(results => getLatLng(results[0]))
		// 		.then((res) =>
		// 			location.push(res)
		// 		)
		// 		.catch(error => console.error(error));
		// }
		// console.log(location);
		// setMarkerLocation(location);
	};

	renderMarkers();

	const {isLoaded} = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
	});
	if(!isLoaded) return <div>Loading...</div>;

	// const test = data.map(res => res.location);
	// console.log(test)

	return(
		<>
			<GoogleMap zoom={10} center={{lat: 59.33, lng: 18.06}} mapContainerClassName="w-screen h-96">
				<Marker position={{lat: 59.33, lng: 18.06}}></Marker>
				{/* { data.map(res =>
					<Marker position={res.location}></Marker>
					)} */}
				{markerLocation ? markerLocation.map(loc => (
					<Marker key={loc}
						position={loc}
					></Marker>
				)) : <></>}
			</GoogleMap>
		</>

	);
}