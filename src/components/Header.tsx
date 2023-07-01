import { formSchema } from '../utils/form';

export function Header() {
  function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.[0]) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;

      try {
        const fileAsJson = JSON.parse(result);

        if (!formSchema.isValidSync(fileAsJson)) throw new Error();

        console.log(fileAsJson);
      } catch (e) {
        alert('Invalid file.');
      }
    };

    reader.readAsText(e.target.files[0]);
  }

  return (
    <header className="flex justify-between">
      <h1 className="text-center text-4xl font-bold text-white">JSON-IMAGE</h1>

      <div className="flex gap-2">
        <label className="cursor-pointer rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-700">
          Import
          <input type="file" onChange={handleImportFile} className="hidden" />
        </label>

        <button className="rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-700">
          Export
        </button>
      </div>
    </header>
  );
}
