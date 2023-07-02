import { Controller, useFieldArray } from 'react-hook-form';

import { useEditor } from '../hooks/useEditor';

import type { FormValues } from '../utils/form';

export function Image() {
  return (
    <div className="flex justify-center">
      <Canvas />
    </div>
  );
}

function Canvas() {
  const { fields } = useFieldArray<FormValues>({ name: 'image.lines' });

  return (
    <LineRowContainer column={true}>
      {fields.map((field, index) => (
        <Line key={field.id} lineIndex={index} />
      ))}
    </LineRowContainer>
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
    <LineRowContainer column={false}>
      {fields.map((field, index) => (
        <Controller
          key={field.id}
          name={`image.lines.${lineIndex}.pixels.${index}.color`}
          render={({ field: { value, onChange } }) => (
            <Pixel background={value} onClick={onChange} />
          )}
        />
      ))}
    </LineRowContainer>
  );
}

interface LineRowContainerProps {
  children: React.ReactNode;
  column: boolean;
}

function LineRowContainer({ children, column }: LineRowContainerProps) {
  const { isInPhotoMode } = useEditor();

  return (
    <div
      className={`
        flex
        overflow-hidden
        ${column ? 'flex-col rounded' : 'flex-row'}
        ${isInPhotoMode ? 'gap-0' : 'gap-0.5'}
      `}
    >
      {children}
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
