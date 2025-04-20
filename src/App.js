import "./App.css";
import { TodoPageRenderer } from "./pages/TodoPageRenderer";

function App() {
  return (
    <div className="App">
      <TodoPageRenderer />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-500">
          Hello, Tailwind CSS!
        </h1>
      </div>
    </div>
  );
}

export default App;
