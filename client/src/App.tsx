import './App.css';
import Header from './components/Header.tsx';

function App() {
  return (
    <div className="flex flex-col gap-4">
        <Header />
        <div className="bg-green-500 text-white p-4">Project adder</div>
        <div className="bg-yellow-500 text-white p-4">Project category</div>
        <div className="bg-purple-500 text-white p-4">projects</div>
    </div>
  );
}

export default App;