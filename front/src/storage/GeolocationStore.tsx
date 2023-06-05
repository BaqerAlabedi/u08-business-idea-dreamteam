import { create } from "zustand";

type GeolocationStore = {
	location: string | null;
	error: string | null;
	loading: boolean;
	setLocation: (location: string) => void;
	setError: (error: string) => void;
	setLoading: (loading: boolean) => void;
  };

export  const GeolocationStore = create<GeolocationStore>((set) => ({
	location: null,
	error: null,
	loading: false,
	setLocation: (location) => set({ location }),
	setError: (error) => set({ error }),
	setLoading: (loading) => set({ loading }),
}));