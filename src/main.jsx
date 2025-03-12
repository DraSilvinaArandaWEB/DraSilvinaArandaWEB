import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Mela } from './views/mela/Mela.jsx'
import { Corporales } from './views/corporales/Corporales.jsx'
import { Faciales } from './views/faciales/Faciales.jsx'
import { Contacto } from './views/contact/Contacto.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import { AntesYdespues } from './views/beforeAfter/AntesYdespues.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/Antes&Despues",
    element: <AntesYdespues></AntesYdespues>
  },
  {
    path: "/Mela",
    element: <Mela></Mela>
  },
  {
    path: "/Corporales",
    element: <Corporales></Corporales>
  },
  {
    path: "/Faciales",
    element: <Faciales></Faciales>
  },
  {
    path: "/Contacto",
    element: <Contacto></Contacto>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
