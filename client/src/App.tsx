import { useEffect } from 'react';
import './App.css';
import Header from './components/Header.tsx';
import ProjectAdder from './components/ProjectAdder.tsx';
import ProjectGroups from './components/ProjectGroups.tsx';
import Projects from './components/Projects.tsx';
import { themeColors } from './constants/colors.ts';

function App() {

  useEffect(() => {
    const rootElement = document.getElementById('root');
    
    rootElement.style.backgroundColor = themeColors.dark.appBg;
    rootElement.style.color = themeColors.dark.textPrimary;
    rootElement.style.minHeight = '100vh';
  }, [themeColors]);

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