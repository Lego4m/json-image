import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface EditorContextDataProps {
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
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
