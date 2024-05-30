import { create } from "zustand";

interface RouterStore {
  currentRouter: string;
  setRouter: (route: string) => void;
}

const routerStore = create<RouterStore>((set) => ({
  currentRouter: "/",
  setRouter: (route) => set({ currentRouter: route }),
}));

export default routerStore;
