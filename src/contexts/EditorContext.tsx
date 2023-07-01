import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface EditorContextDataProps {
  selectedColor: string;
  setSelectedColor: (newValue: string) => void;
}

interface EditorContextProviderProps {
  children: ReactNode;
}

export const EditorContext = createContext<EditorContextDataProps>(
  {} as EditorContextDataProps
);

export function EditorContextProvider({
  children,
}: EditorContextProviderProps) {
  const [selectedColor, setSelectedColor] = useState('#000000');

  return (
    <EditorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </EditorContext.Provider>
  );
}
