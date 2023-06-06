import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { GeolocationStore } from "../storage/GeolocationStore";

export default function Map(data: unknown) {
	const { setLocation, setError, setLoading } = GeolocationStore();
	const [markerLocation, setMarkerLocation] = useState<{ lat: number; lng: number } | null>(null);

	const [placeIds, setPlaceIds] = useState<string[]>([]);

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY
	});

	const processPlaceId = (placeId: string) => {
		const geocoder = new google.maps.Geocoder();
		geocoder.geocode({ placeId: placeId }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
			if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
				const location = results[0].geometry.location;
				const markerPosition = { lat: location.lat(), lng: location.lng() };
				setMarkerLocation(markerPosition);
			}
		});
	};


	useEffect(() => {
		const placeId: string[] = Object.values(data)
			.flatMap((item: { location: unknown }[]) => item.map((res: { location: unknown }) => res.location))
			.filter((location: any) => location !== null);
		setPlaceIds(placeId);
	}, [data]);


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
				{placeIds.map((placeId) => {
					processPlaceId(placeId);

					return (
						markerLocation && (
							<Marker key={placeId} position={markerLocation}></Marker>
						)
					);
				})}
			</GoogleMap>
		</>
	)

}