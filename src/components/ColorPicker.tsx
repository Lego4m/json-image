import { useRef } from 'react';
import { CirclePicker } from 'react-color';
import debounce from 'lodash.debounce';

import { useEditor } from '../hooks/useEditor';

export function ColorPicker() {
  const { selectedColor, setSelectedColor } = useEditor();

  const debouncedHandleChange = useRef(
    debounce((value: string) => setSelectedColor(value), 150)
  ).current;

  return (
    <div className="flex flex-col gap-4">
      <CirclePicker
        color={selectedColor}
        onChangeComplete={(e) => setSelectedColor(e.hex)}
      />

      <label
        className="h-8 w-full cursor-pointer rounded-lg"
        style={{ backgroundColor: selectedColor }}
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
