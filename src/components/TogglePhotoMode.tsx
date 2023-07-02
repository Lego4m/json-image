import { IoCameraOutline, IoCamera } from 'react-icons/io5';

import { useEditor } from '../hooks/useEditor';

export function TogglePhotoMode() {
  const { isInPhotoMode, setIsInPhotoMode } = useEditor();

  function handleToggle() {
    setIsInPhotoMode(!isInPhotoMode);
  }

  return (
    <button onClick={handleToggle} className="text-3xl text-neutral-300">
      {isInPhotoMode ? <IoCamera /> : <IoCameraOutline />}
    </button>
  );
}
