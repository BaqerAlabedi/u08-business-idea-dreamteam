import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { GeolocationStore } from "../storage/GeolocationStore";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";



export default function Map(foods) {
	const { setLocation, setError, setLoading } = GeolocationStore();
	const [markerLocation, setMarkerLocation] = useState([]);
	console.log(foods);

	const renderMarkers = () => {
		const location = [];
		console.log(foods);
		for(let i = 0; i < foods.foods.length; i++)
		{
			geocodeByPlaceId(foods.foods[i].location)
				.then(results => getLatLng(results[0]))
				.then((res) =>
					location.push(res)
				)
				.catch(error => console.error(error));
		}
		console.log(location);
		setMarkerLocation(location);
	};


	useEffect(() => {
		setLoading(true);

		navigator.geolocation.getCurrentPosition(
			(position) => {
				const lat = position.coords.latitude;
				const lng = position.coords.longitude;
				const geoPosition = lat + "," + lng;
				setLocation(geoPosition);
				setLoading(false);
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

		renderMarkers();

	}, [setError, setLoading, setLocation]);

	const {isLoaded} = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
	});
	if(!isLoaded) return <div>Loading...</div>;

	return(
		<>
			<GoogleMap zoom={10} center={{lat: 59.33, lng: 18.06}} mapContainerClassName="w-screen h-96">
				{markerLocation ? markerLocation.map(loc => (
					<Marker key={loc}
						position={loc}
						map
					></Marker>
				)) : <></>}
			</GoogleMap>
		</>

	);
}