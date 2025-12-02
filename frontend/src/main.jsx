// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Tela_inicial from './pages/Tela_Inicial/Tela_inicial.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <Tela_inicial/>
//   </StrictMode>,
// )

import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes.jsx';
import { GlobalContextProvider } from './contexts/GlobalContext.jsx';

createRoot(document.getElementById('root')).render(
    <GlobalContextProvider>
      
      <RouterProvider router={router} >
      </RouterProvider>

    </GlobalContextProvider>
);