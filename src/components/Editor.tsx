import { Controller } from 'react-hook-form';

import { Image } from './Image';

export function Editor() {
  return (
    <main className="flex flex-1 flex-col gap-2 rounded-lg bg-neutral-800 py-2">
      <div className="px-2">
        <Controller
          name="name"
          render={({ field }) => (
            <input
              type="text"
              className="w-full rounded-lg bg-transparent text-center text-xl font-bold text-white"
              {...field}
            />
          )}
        />
      </div>

      <div className="flex overflow-x-auto px-2">
        <Image />
      </div>
    </main>
  );
}
