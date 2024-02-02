import { useRef } from 'react';
import { CirclePicker } from 'react-color';
import debounce from 'lodash.debounce';

import { useEditor } from '../stores/EditorStore';

export function ColorPicker() {
  const color = useEditor((state) => state.color);
  const setColor = useEditor((state) => state.setColor);

  const debouncedHandleChange = useRef(
    debounce((value: string) => setColor(value), 150)
  ).current;

  return (
    <div className="flex flex-col items-center gap-4">
      <CirclePicker color={color} onChangeComplete={(e) => setColor(e.hex)} />

      <label
        className="h-8 w-full cursor-pointer rounded-lg"
        style={{ backgroundColor: color }}
      >
        <input
          className="hidden"
          type="color"
          onChange={(e) => debouncedHandleChange(e.target.value)}
        />
      </label>
    </div>
  );
}
