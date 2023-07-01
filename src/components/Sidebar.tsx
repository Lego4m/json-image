import { CirclePicker } from 'react-color';
import type { ColorResult } from 'react-color';

import { useEditor } from '../hooks/useEditor';

export function Sidebar() {
  const { selectedColor, setSelectedColor } = useEditor();

  function handleChangeComplete(e: ColorResult) {
    setSelectedColor(e.hex);
  }

  return (
    <aside className="rounded-lg bg-neutral-800 p-2">
      <CirclePicker
        color={selectedColor}
        onChangeComplete={handleChangeComplete}
      />
    </aside>
  );
}
