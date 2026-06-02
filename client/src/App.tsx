import './App.css';
import Header from './components/Header.tsx';
import ProjectAdder from './components/ProjectAdder.tsx';
import ProjectGroups from './components/ProjectGroups.tsx';
import Projects from './components/Projects.tsx';

function App() {
  return (
    <div className="flex flex-col gap-4">
        <Header />
        <ProjectAdder />
        <ProjectGroups />
        <Projects />
    </div>
  );
}

export default App;