import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './routes'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas/>
    <ToastContainer />
  </StrictMode>,
)
