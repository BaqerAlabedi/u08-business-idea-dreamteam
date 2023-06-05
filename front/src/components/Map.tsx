import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import { useEffect } from "react";
import { GeolocationStore } from "../storage/GeolocationStore";


export default function Map() {
	const { setLocation, setError, setLoading } = GeolocationStore();
	const {isLoaded} = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
	});
	if(!isLoaded) return <div>Loading...</div>;

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

	return(
		<>
			<GoogleMap zoom={10} center={{lat: 59.33, lng: 18.06}} mapContainerClassName="w-screen h-96">
				<Marker position={{lat: 59.33, lng: 18.06}}></Marker>
			</GoogleMap>
		</>

	);
}