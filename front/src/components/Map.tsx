import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { GeolocationStore } from "../storage/GeolocationStore";

export default function Map(data: any) {
	const { setLocation, setError, setLoading } = GeolocationStore();
	const [placeIds, setPlaceIds] = useState<string[]>([]);
	const [markerPositions, setMarkerPositions] = useState<google.maps.LatLngLiteral[]>([]);

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY
	});

	const processPlaceIds = () => {
		const geocoder = new google.maps.Geocoder();

		placeIds.forEach((placeId) => {
			geocoder.geocode({ placeId: placeId }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
				if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
					const location = results[0].geometry.location;
					const markerPosition = { lat: location.lat(), lng: location.lng() };
					setMarkerPositions(prevPositions => prevPositions.concat(markerPosition));
				}
			});
		});
	};

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


		const placeId: any[] = Object.values(data)
		const positionId = placeId.flatMap((item: { location: any }[]) => item.map((res: { location: any }) => res.location))
			.filter((location: any) => location !== null);
		setPlaceIds(positionId);

		if (placeIds.length > 0) {
			processPlaceIds();
		}

	}, [setError, setLoading, setLocation, data, placeIds]);

	if (!isLoaded) return <div>Loading...</div>;

	return (
		<GoogleMap zoom={10} center={{ lat: 59.33, lng: 18.06 }} mapContainerClassName="w-screen h-96">
			{markerPositions.map((position, index) => (
				<Marker key={index} position={position} />
			))}
		</GoogleMap>
	);
}