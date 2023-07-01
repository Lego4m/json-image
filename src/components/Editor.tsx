export function Editor() {
  return (
    <main className="flex flex-1 flex-col gap-2 rounded-lg bg-neutral-800 p-2">
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
    </main>
  );
}
