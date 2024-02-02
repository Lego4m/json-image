import { IoCameraOutline, IoCamera } from 'react-icons/io5';

import { useEditor } from '../stores/EditorStore';

export function TogglePhotoMode() {
  const isInPhotoMode = useEditor((state) => state.isInPhotoMode);
  const setIsInPhotoMode = useEditor((state) => state.setIsInPhotoMode);

  function handleToggle() {
    setIsInPhotoMode(!isInPhotoMode);
  }

  return (
    <button onClick={handleToggle} className="text-3xl text-neutral-300">
      {isInPhotoMode ? <IoCamera /> : <IoCameraOutline />}
    </button>
  );
}
