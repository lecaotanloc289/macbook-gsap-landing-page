/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
const useMacbookStore = create((set) => ({
  color: "#2e2c2e",
  setColor: (color: any) => set({ color }),
  scale: 0.08,
  setScale: (scale: any) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture: any) => set({ texture }),

  reset: () =>
    set({ color: "#2e2c2e", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));
export default useMacbookStore;
