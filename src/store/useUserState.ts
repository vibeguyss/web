import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
    userId: number;
    imageUrl: string;
    name: string;
    email: string;
}

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
}

const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            clearUser: () => set({ user: null }),
        }),
        {
            name: "zustand-user-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useUserStore;
