import { CirclePicker } from 'react-color';

function App() {
  return (
    <main className="p-4">
      <div className="flex justify-between">
        <h1 className="text-center text-4xl font-bold text-white">
          JSON-IMAGE
        </h1>

        <div className="flex gap-2">
          <button className="rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-700">
            Import
          </button>

          <button className="rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-700">
            Export
          </button>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <section className="rounded-lg bg-neutral-800 p-2">
          <CirclePicker />
        </section>

        <section className="flex flex-1 flex-col gap-2 rounded-lg bg-neutral-800 p-2">
          <h2 className="text-center text-2xl font-bold text-white">My Work</h2>

          <div className="flex justify-center">
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <div className="h-5 w-5 bg-purple-500" />
                <div className="h-5 w-5 bg-purple-500" />
                <div className="h-5 w-5 bg-purple-500" />
              </div>
              <div className="flex gap-1">
                <div className="h-5 w-5 bg-purple-500" />
                <div className="h-5 w-5 bg-purple-500" />
                <div className="h-5 w-5 bg-purple-500" />
              </div>
              <div className="flex gap-1">
                <div className="h-5 w-5 bg-purple-500" />
                <div className="h-5 w-5 bg-purple-500" />
                <div className="h-5 w-5 bg-purple-500" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
