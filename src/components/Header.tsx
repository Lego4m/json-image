export function Header() {
  return (
    <header className="flex justify-between">
      <h1 className="text-center text-4xl font-bold text-white">JSON-IMAGE</h1>

      <div className="flex gap-2">
        <label className="cursor-pointer rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-700">
          Import
          <input type="file" className="hidden" />
        </label>

        <button className="rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-700">
          Export
        </button>
      </div>
    </header>
  );
}
