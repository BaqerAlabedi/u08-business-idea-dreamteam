import { create } from "zustand";

interface StoreUser {
    storeUser: string;
    setStoreUser: (storeUser: string) => void;
}

const useStoreUser = create<StoreUser>((set) => ({
	storeUser: "",
	setStoreUser: (storeUser: string) => set({ storeUser }),
}));

export default useStoreUser;