import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { GeolocationStore } from "../storage/GeolocationStore";

export default function Map(data: any) {
	const { setLocation, setError, setLoading } = GeolocationStore();
	const [markerLocation, setMarkerLocation] = useState(null);

	const [ productLocation, setProductLocation ] = useState([]);

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY
	});

	//	FUNKAR!

	// const test = Object.values(data).map((item) => {
	// 	const test2 = item.map((res: { location: any }) => res.location);
	// 	return test2;
	// });

	/////////////////////

	// const test = JSON.stringify(
	// 	Object.values(data).map((item) => {
	// 	  const test2 = item.map((res: { location: any }) => res.location);
	// 	  return test2;
	// 	})
	// );

	// const test = JSON.stringify(
	// 	Object.values(data)
	// );

	// console.log(test);

	const placeId = "";

	// const test = Object.values(data).map((item) => {
	// 	return item;
	// });
	// setproductLocation(test);

	// console.log(productLocation);

	useEffect(() => {
		// const test = Object.values(data).map((item) => {
		// 	const test2 = item.map((res: { location: any }) => res.location);
		// 	return test2;
		// });


		// setMarkerLocation(test)

		// console.log(test);

		const test = Object.values(data);
		setProductLocation(test);
	
		console.log(productLocation);

		const geocoder = new window.google.maps.Geocoder();
		geocoder.geocode({ placeId: placeId }, (results, status) => {
			if (status === "OK" && results[0]) {
				const location = results[0].geometry.location;
				setMarkerLocation({ lat: location.lat(), lng: location.lng() });
			}
		});


	}, [placeId]);
	console.log(productLocation);


	useEffect(() => {
		setLoading(true);

		navigator.geolocation.getCurrentPosition(
			(position) => {
				const lat = position.coords.latitude;
				const lng = position.coords.longitude;
				const geoPosition = { lat, lng };
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



	if (!isLoaded) return <div>Loading...</div>;

	return (
		<>
			<GoogleMap zoom={10} center={{lat: 59.33, lng: 18.06}} mapContainerClassName="w-screen h-96">
				{productLocation.map((location) => (
					console.log(location),
					<Marker
						position={markerLocation}
					></Marker>
				))}
			</GoogleMap>
		</>
	)

}