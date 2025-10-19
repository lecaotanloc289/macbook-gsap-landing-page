// src/store/macbook.ts
import { create } from "zustand";

export type TextureId = string | null;

export interface MacbookState {
  color: string;
  scale: number;
  texture: TextureId;

  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: TextureId) => void;

  reset: () => void;
}

const DEFAULTS = {
  color: "#2e2c2e",
  scale: 0.08,
  texture: "/videos/feature-1.mp4" as const,
};

const useMacbookStore = create<MacbookState>()((set) => ({
  ...DEFAULTS,

  setColor: (color) => set({ color }),
  setScale: (scale) => set({ scale }),
  setTexture: (texture) => set({ texture }),

  reset: () => set({ ...DEFAULTS }),
}));

export default useMacbookStore;
