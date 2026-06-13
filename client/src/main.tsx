import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TasklistProvider } from './context/TaskContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasklistProvider>
      <App />
    </TasklistProvider>
  </StrictMode>
)
