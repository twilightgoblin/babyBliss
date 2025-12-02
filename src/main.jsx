import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerServiceWorker, checkInstallability } from './utils/pwa'

// Register service worker for PWA
registerServiceWorker();

// Check if app can be installed
checkInstallability();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
