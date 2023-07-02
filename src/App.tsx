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
        <div className="p-4">
          <Header />

          <div className="mt-4 flex gap-2">
            <Sidebar />

            <Editor />
          </div>
        </div>
      </EditorContextProvider>
    </FormProvider>
  );
}

export default App;
