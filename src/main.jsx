import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Mela } from './views/mela/Mela.jsx'
import { Corporales } from './views/corporales/Corporales.jsx'
import { Faciales } from './views/faciales/Faciales.jsx'
import { Opiniones } from './views/opiniones/Opiniones.jsx'
import { Contacto } from './views/contacto/Contacto.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
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
    path: "/Opiniones",
    element: <Opiniones></Opiniones>
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
