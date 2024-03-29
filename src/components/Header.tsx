import { useFormContext } from 'react-hook-form';

import { formSchema, type FormValues } from '../utils/form';

import { TogglePhotoMode } from './TogglePhotoMode';

export function Header() {
  const { handleSubmit, reset } = useFormContext<FormValues>();

  function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.[0]) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;

      try {
        const parsedFile = JSON.parse(result);

        if (!formSchema.isValidSync(parsedFile)) throw new Error();

        reset(parsedFile);
      } catch (e) {
        alert('Invalid file.');
      }
    };

    reader.readAsText(e.target.files[0]);
  }

  function handleExportFile(data: FormValues) {
    const file = new Blob([JSON.stringify(data)], {
      type: 'text/plain;charset=utf-8',
    });
    const element = document.createElement('a');

    element.href = URL.createObjectURL(file);
    element.download = `${data.name}.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  return (
    <header className="flex flex-col justify-between gap-2 sm:flex-row">
      <h1 className="text-center text-4xl font-bold text-white">JSON IMAGE</h1>

      <div className="flex flex-col gap-2 sm:flex-row-reverse">
        <button
          onClick={handleSubmit(handleExportFile)}
          className="rounded-lg bg-violet-600 px-4 py-2 text-center font-medium text-white transition hover:bg-violet-700"
        >
          Export
        </button>

        <label className="cursor-pointer rounded-lg bg-violet-600 px-4 py-2 text-center font-medium text-white transition hover:bg-violet-700">
          Import
          <input
            type="file"
            accept=".json"
            onChange={handleImportFile}
            className="hidden"
          />
        </label>

        <div className="flex flex-row justify-center">
          <TogglePhotoMode />
        </div>
      </div>
    </header>
  );
}
