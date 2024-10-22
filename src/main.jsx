import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext from './store/appContext.jsx'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// import AppContext from '../store/appContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <App />
      <ToastContainer stacked={true} />
    </AppContext>
  </StrictMode>,
)
