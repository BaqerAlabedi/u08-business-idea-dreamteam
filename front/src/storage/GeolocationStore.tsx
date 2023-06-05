import { create } from "zustand";

type GeolocationStore = {
	currentLocation: string | null;
	error: string | null;
	loading: boolean;
	setCurrentLocation: (currentLocation: string) => void;
	setError: (error: string) => void;
	setLoading: (loading: boolean) => void;
  };

export  const GeolocationStore = create<GeolocationStore>((set) => ({
	currentLocation: null,
	error: null,
	loading: false,
	setCurrentLocation: (currentLocation) => set({ currentLocation }),
	setError: (error) => set({ error }),
	setLoading: (loading) => set({ loading }),
}));