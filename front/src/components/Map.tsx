import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { GeolocationStore } from "../storage/GeolocationStore";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";



export default function Map(data : any) {
	const { setLocation, setError, setLoading } = GeolocationStore();
	const [markerLocation, setMarkerLocation] = useState<any>([]);

	const renderMarkers = () => {
		const location = [];
		console.log(data);
		for(let i = 0; i < data.foods.length; i++)
		{
			geocodeByPlaceId(data.foods[i].location)
				.then(results => getLatLng(results[0]))
				.then((data) =>
					location.push(data)
				)
				.catch(error => console.error(error));
		}
		console.log(location);
		setMarkerLocation(location);
	};

	useEffect(() => {
		renderMarkers();
	},[] );

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
	}, [setError, setLoading, setLocation]);

	const {isLoaded} = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
	});
	if(!isLoaded) return <div>Loading...</div>;

	return(
		<>

			<GoogleMap zoom={10} center={{lat: 59.33, lng: 18.06}} mapContainerClassName="w-screen h-96">
				{markerLocation.map(loc => (
					<Marker
						position={loc}
					></Marker>
				))}
			</GoogleMap>
		</>

	);
}