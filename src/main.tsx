import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from '@dittolive/anvil'
import App from './App.tsx'
import './index.css'

// HashRouter keeps deep links working on GitHub Pages without a 404
// fallback — routes live after the "#", so every path serves index.html.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
)
