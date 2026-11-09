// src/store/useStore.ts
import { create } from 'zustand';

interface AppState {
  activeProjectIndex: number;
  setActiveProject: (index: number) => void;
}

export const useStore = create<AppState>((set) => ({
  activeProjectIndex: 0, // Defaults to 0 (first project)
  setActiveProject: (index) => set({ activeProjectIndex: index }),
}));