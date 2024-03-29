import { Controller, useFieldArray } from 'react-hook-form';
import { IoAdd, IoRemove } from 'react-icons/io5';

import { useEditor } from '../stores/EditorStore';
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
    <div className="mx-auto">
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
  const isInPhotoMode = useEditor((state) => state.isInPhotoMode);

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
            <Pixel value={value} onChange={onChange} />
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
  const isInPhotoMode = useEditor((state) => state.isInPhotoMode);

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
  value: string;
  onChange: (value: string) => void;
}

function Pixel({ value, onChange }: PixelProps) {
  function handleMouseEvent(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.buttons !== 1) return;

    const { color } = useEditor.getState();

    onChange(color);
  }

  return (
    <div
      onMouseDown={handleMouseEvent}
      onMouseOver={handleMouseEvent}
      className="h-4 w-4 select-none sm:h-5 sm:w-5"
      style={{ background: value }}
    />
  );
}
