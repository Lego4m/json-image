import { Controller, useFormContext, useFieldArray } from 'react-hook-form';
import type { Control } from 'react-hook-form';

import type { FormValues } from '../utils/form';
import { useEditor } from '../hooks/useEditor';

export function Image() {
  const { control } = useFormContext<FormValues>();

  const { fields } = useFieldArray({ control, name: 'image.lines' });

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-1">
        {fields.map((field, index) => (
          <Line key={field.id} control={control} lineIndex={index} />
        ))}
      </div>
    </div>
  );
}

interface LineProps {
  control: Control<FormValues>;
  lineIndex: number;
}

function Line({ control, lineIndex }: LineProps) {
  const { fields } = useFieldArray({
    control,
    name: `image.lines.${lineIndex}.pixels`,
  });

  return (
    <div className="flex gap-1">
      {fields.map((field, index) => (
        <Controller
          key={field.id}
          control={control}
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