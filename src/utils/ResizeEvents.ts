import { useEffect } from 'react';
import {
  useFormContext,
  type UseFieldArrayAppend,
  type UseFieldArrayPrepend,
  type UseFieldArrayRemove,
} from 'react-hook-form';

import {
  getLineFromPixelsLength,
  defaultLine,
  defaultPixelColor,
  type FormValues,
} from './form';

export type Position = 'Top' | 'Right' | 'Bottom' | 'Left';
export type ResizeAction = 'Add' | 'Remove';

export function dispatchResizeAction(
  resizeAction: ResizeAction,
  position: Position
) {
  const event = new Event(`on${resizeAction}${position}Line`);

  document.dispatchEvent(event);
}

interface useResizeAction {
  prepend: UseFieldArrayPrepend<FormValues>;
  append: UseFieldArrayAppend<FormValues>;
  remove: UseFieldArrayRemove;
}

export function useVerticalResizeAction({
  prepend,
  append,
  remove,
}: useResizeAction) {
  const { getValues } = useFormContext<FormValues>();

  useEffect(() => {
    function handleAddTopLine() {
      const lines = getValues('image.lines');

      if (lines.length <= 0) {
        prepend(defaultLine);
        return;
      }

      prepend(getLineFromPixelsLength(lines[0].pixels.length));
    }

    function handleRemoveTopLine() {
      remove(0);
    }

    function handleAddBottomLine() {
      const lines = getValues('image.lines');

      if (lines.length <= 0) {
        append(defaultLine);
        return;
      }

      append(getLineFromPixelsLength(lines[0].pixels.length));
    }

    function handleRemoveBottomLine() {
      remove(-1);
    }

    document.addEventListener('onAddTopLine', handleAddTopLine);
    document.addEventListener('onAddBottomLine', handleAddBottomLine);
    document.addEventListener('onRemoveTopLine', handleRemoveTopLine);
    document.addEventListener('onRemoveBottomLine', handleRemoveBottomLine);

    return () => {
      document.removeEventListener('onAddTopLine', handleAddTopLine);
      document.removeEventListener('onAddBottomLine', handleAddBottomLine);
      document.removeEventListener('onRemoveTopLine', handleRemoveTopLine);
      document.removeEventListener(
        'onRemoveBottomLine',
        handleRemoveBottomLine
      );
    };
  }, [getValues, prepend, append, remove]);
}

export function useHorizontalResizeAction({
  prepend,
  append,
  remove,
}: useResizeAction) {
  useEffect(() => {
    function handleAddLeftLine() {
      prepend({ color: defaultPixelColor });
    }

    function handleRemoveLeftLine() {
      remove(0);
    }

    function handleAddRightLine() {
      append({ color: defaultPixelColor });
    }

    function handleRemoveRightLine() {
      remove(-1);
    }

    document.addEventListener('onAddLeftLine', handleAddLeftLine);
    document.addEventListener('onAddRightLine', handleAddRightLine);
    document.addEventListener('onRemoveLeftLine', handleRemoveLeftLine);
    document.addEventListener('onRemoveRightLine', handleRemoveRightLine);

    return () => {
      document.removeEventListener('onAddLeftLine', handleAddLeftLine);
      document.removeEventListener('onAddRightLine', handleAddRightLine);
      document.removeEventListener('onRemoveLeftLine', handleRemoveLeftLine);
      document.removeEventListener('onRemoveRightLine', handleRemoveRightLine);
    };
  }, [prepend, append, remove]);
}
