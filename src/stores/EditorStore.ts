import { create } from 'zustand';

interface EditorStore {
  color: string;
  setColor: (color: string) => void;
  isInPhotoMode: boolean;
  setIsInPhotoMode: (isInPhotoMode: boolean) => void;
}

export const useEditor = create<EditorStore>((set) => ({
  color: '#000000',
  setColor: (color) => set(() => ({ color })),
  isInPhotoMode: false,
  setIsInPhotoMode: (isInPhotoMode) => set(() => ({ isInPhotoMode })),
}));
