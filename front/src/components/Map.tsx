import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { GeolocationStore } from "../storage/GeolocationStore";
import { Products } from "../pages/Dashboard";

export default function Map(data: any) {
	const { setLocation, setError, setLoading } = GeolocationStore();
	const [markerLocation, setMarkerLocation] = useState();

	const [ productLocation, setProductLocation ] = useState([]);

	const [placeIds, setPlaceIds] = useState<string[]>([]);

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY
	});

	//	FUNKAR!

	// const test = Object.values(data).map((item) => {
	// 	const test2 = item.map((res: { location: any }) => res.location);
	// 	return test2;
	// });

	// console.log(test);

	/////////////////////

	// const test = JSON.stringify(
	// 	Object.values(data).map((item) => {
	// 	  const test2 = item.map((res: { location: any }) => res.location);
	// 	  return test2;
	// 	})
	// );

	// const placeIds: string[] = Object.values(data)
  	// .flatMap((item: { location: any }[]) => item.map((res: { location: any }) => res.location))
  	// .filter((location: any) => location !== null);

	// console.log(placeIds);


	// const test = JSON.stringify(
	// 	Object.values(data)
	// );

	// console.log(test);

	// const placeId = "";
	// "ChIJ5yOQliZ4X0YR02NyteAx0SI"
	// "ChIJu-qIlMCdX0YRee_0UkcgXMA"

	// const test = Object.values(data).map((item) => {
	// 	return item;
	// });
	// setproductLocation(test);

	// console.log(productLocation);

	// const processPlaceId = (placeId: string) => {

	// 	const geocoder = new google.maps.Geocoder();
	// 	geocoder.geocode({ placeId: placeId }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
	// 		if (status === "OK" && results) {
	// 			const location = results[0].geometry.location;
	// 			setMarkerLocation({ lat: location.lat(), lng: location.lng() });
	// 		}
	// 	});
	// };

// 	const placeId: string[] = Object.values(data)
//   .flatMap((item: { location: any }[]) => item.map((res: { location: any }) => res.location))
//   .filter((location: any) => location !== null);


// console.log(placeId)

	// {placeIds.map((placeId: string) => {
	// 	processPlaceId(placeId);
	// 	})}

	// console.log(placeIds)

	// const processPlaceId = (placeId: string) => {
	// 	const geocoder = new google.maps.Geocoder();
	// 	geocoder.geocode({ placeId: placeId }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
	// 		if (status === "OK" && results) {
	// 			const location = results[0].geometry.location;
	// 			// location = placeIds;
	// 			setMarkerLocation({ lat: location.lat(), lng: location.lng() });
	// 		}
	// 	});
	// };

	// 	processPlaceId();

	
	useEffect(() => {
// console.log(placeId)
		const placeId: string[] = Object.values(data)
			.flatMap((item: { location: any }[]) => item.map((res: { location: any }) => res.location))
			.filter((location: any) => location !== null);
		setPlaceIds(placeId);

		// const test = Object.values(data).map((item) => {
		// 	const test2 = item.map((res: { location: any }) => res.location);
		// 	return test2;
		// });


		// setMarkerLocation(test)

		// console.log(test);

		// const test = Object.values(data);
		// setProductLocation(test);

		// console.log(productLocation);


		// const test3 = productLocation.JSON.stringify();
		// console.log(test3)

		// const geocoder = new window.google.maps.Geocoder();
		// geocoder.geocode({ placeId: placeId }, (results, status) => {
		// 	if (status === "OK" && results) {
		// 		const location = results[0].geometry.location;
		// 		setMarkerLocation({ lat: location.lat(), lng: location.lng() });
		// 	}
		// });


	}, []);
	// console.log(productLocation);
	console.log(placeIds);


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
				{placeIds.map(placeId => (
					console.log(placeId),
					<Marker
						key={placeId}
						position={placeId}
					></Marker>
				))}


				{/* <GoogleMap zoom={10} center={{lat: 59.33, lng: 18.06}} mapContainerClassName="w-screen h-96">
				{productLocation && productLocation.length > 0 && productLocation.map((res: any) => (
					console.log(res.location),
					<Marker
						key={res.id}
						position={res.location}
					></Marker>
				))} */}

				{/* {productLocation && productLocation.map(res => (
					console.log(res.location),
					<Marker
						position={markerLocation}
					></Marker>
				)
				)} */}

				{/* {placeIds.map((placeId) => {
					processPlaceId(placeId);
					return (
						<Marker
							key={placeId}
							position={markerLocation}
						></Marker>
					);
				})} */}
			</GoogleMap>
		</>
	)

}