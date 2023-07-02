import { Controller, useFieldArray } from 'react-hook-form';
import { IoAdd, IoRemove } from 'react-icons/io5';

import { useEditor } from '../hooks/useEditor';

import type { FormValues } from '../utils/form';
import {
  dispatchResizeAction,
  useVerticalResizeAction,
  useHorizontalResizeAction,
  type ResizeAction,
  type Position,
} from '../utils/ResizeEvents';

export function Image() {
  return (
    <div className="flex justify-center">
      <Controls>
        <Canvas />
      </Controls>
    </div>
  );
}

interface ControlsProps {
  children: React.ReactNode;
}

function Controls({ children }: ControlsProps) {
  return (
    <div className="flex flex-col gap-2">
      <ActionGroup position="Top" />

      <div className="flex gap-2">
        <ActionGroup position="Left" column={true} />
        {children}
        <ActionGroup position="Right" column={true} />
      </div>

      <ActionGroup position="Bottom" />
    </div>
  );
}

interface ActionGroupProps {
  column?: boolean;
  position: Position;
}

function ActionGroup({ column = false, position }: ActionGroupProps) {
  const { isInPhotoMode } = useEditor();

  if (isInPhotoMode) return;

  function handleClick(resizeAction: ResizeAction) {
    dispatchResizeAction(resizeAction, position);
  }

  return (
    <div
      className={`
        flex
        items-center
        justify-center
        text-2xl
        text-white
        ${column ? 'flex-col' : 'flex-row'}
      `}
    >
      <button onClick={() => handleClick('Add')}>
        <IoAdd />
      </button>

      <button onClick={() => handleClick('Remove')}>
        <IoRemove />
      </button>
    </div>
  );
}

function Canvas() {
  const { fields, prepend, append, remove } = useFieldArray<FormValues>({
    name: 'image.lines',
  });

  useVerticalResizeAction({ prepend, append, remove });

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
  const { fields, append, prepend, remove } = useFieldArray<FormValues>({
    name: `image.lines.${lineIndex}.pixels`,
  });

  useHorizontalResizeAction({ append, prepend, remove });

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
