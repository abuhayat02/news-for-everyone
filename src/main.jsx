import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routs from './Routs/Routs.jsx'
import DataProvider from './Components/Authentications/DataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={routs} >

      </RouterProvider>
    </DataProvider>
  </StrictMode>
)
