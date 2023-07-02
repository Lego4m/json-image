import { useForm, FormProvider } from 'react-hook-form';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Editor } from './components/Editor';

import { defaultFormValues, type FormValues } from './utils/form';

import { EditorContextProvider } from './contexts/EditorContext';

function App() {
  const form = useForm<FormValues>({ defaultValues: defaultFormValues });

  return (
    <FormProvider {...form}>
      <EditorContextProvider>
        <div className="p-2 sm:p-4">
          <Header />

          <div className="mt-2 flex flex-col gap-2 lg:flex-row">
            <Sidebar />

            <Editor />
          </div>
        </div>
      </EditorContextProvider>
    </FormProvider>
  );
}

export default App;
