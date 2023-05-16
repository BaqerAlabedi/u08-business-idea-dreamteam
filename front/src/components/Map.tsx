import {GoogleMap, useJsApiLoader} from "@react-google-maps/api"


export default function Map() {
	const {isLoaded} = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
	});
	if(!isLoaded) return <div>Loading...</div>;
	return(
		<>
			<GoogleMap zoom={10} center={{lat: 59.33, lng: 18.06}} mapContainerClassName="w-screen h-96">

			</GoogleMap>
		</>

	);
}