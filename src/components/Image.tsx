import { Controller, useFieldArray } from 'react-hook-form';

import { useEditor } from '../hooks/useEditor';

import type { FormValues } from '../utils/form';

export function Image() {
  const { fields } = useFieldArray<FormValues>({ name: 'image.lines' });

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-1">
        {fields.map((field, index) => (
          <Line key={field.id} lineIndex={index} />
        ))}
      </div>
    </div>
  );
}

interface LineProps {
  lineIndex: number;
}

function Line({ lineIndex }: LineProps) {
  const { fields } = useFieldArray<FormValues>({
    name: `image.lines.${lineIndex}.pixels`,
  });

  return (
    <div className="flex gap-1">
      {fields.map((field, index) => (
        <Controller
          key={field.id}
          name={`image.lines.${lineIndex}.pixels.${index}.color`}
          render={({ field: { value, onChange } }) => (
            <Pixel background={value} onClick={onChange} />
          )}
        />
      ))}
    </div>
  );
}

interface PixelProps {
  background: string;
  onClick: (value: string) => void;
}

function Pixel({ background, onClick }: PixelProps) {
  const { selectedColor } = useEditor();

  function handleClick() {
    onClick(selectedColor);
  }

  return (
    <div onClick={handleClick} className="h-5 w-5" style={{ background }} />
  );
}
