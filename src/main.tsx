import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { DemoGuideProvider } from './contexts/DemoGuideContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DemoGuideProvider>
      <BrowserRouter basename="/SO-Copilot-Planner/">
        <App />
      </BrowserRouter>
    </DemoGuideProvider>
  </StrictMode>,
)
