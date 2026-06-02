import './App.css';
import Header from './components/Header.tsx';
import ProjectAdder from './components/Project-adder.tsx';

function App() {
  return (
    <div className="flex flex-col gap-4">
        <Header />
        <ProjectAdder />
        <div className="bg-yellow-500 text-white p-4">Project category</div>
        <div className="bg-purple-500 text-white p-4">projects</div>
    </div>
  );
}

export default App;