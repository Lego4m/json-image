import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Editor } from './components/Editor';

function App() {
  return (
    <div className="p-4">
      <Header />

      <div className="mt-4 flex gap-2">
        <Sidebar />

        <Editor />
      </div>
    </div>
  );
}

export default App;
