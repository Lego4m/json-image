import { useContext } from 'react';

import { EditorContext } from '../contexts/EditorContext';

export function useEditor() {
  return useContext(EditorContext);
}
