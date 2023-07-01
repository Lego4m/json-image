import { useForm, FormProvider } from 'react-hook-form';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Editor } from './components/Editor';

import { defaultValues } from './utils/form';
import type { FormValues } from './utils/form';

function App() {
  const form = useForm<FormValues>({ defaultValues });

  return (
    <FormProvider {...form}>
      <div className="p-4">
        <Header />

        <div className="mt-4 flex gap-2">
          <Sidebar />

          <Editor />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
