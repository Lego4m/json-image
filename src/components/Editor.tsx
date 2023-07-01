import { Image } from './Image';

export function Editor() {
  return (
    <main className="flex flex-1 flex-col gap-2 rounded-lg bg-neutral-800 p-2">
      <h2 className="text-center text-2xl font-bold text-white">My Work</h2>

      <Image />
    </main>
  );
}
