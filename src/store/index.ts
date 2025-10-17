/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
const useMacbookStore = create((set) => ({
  color: "#2e2c3e",
  setColor: (color: any) => set({ color }),
  scale: 0.08,
  setScale: (scale: any) => set({ scale }),

  reset: () => set({ color: "#2e2c3e", scale: 0.08 }),
}));
export default useMacbookStore;
