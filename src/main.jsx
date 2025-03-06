import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
