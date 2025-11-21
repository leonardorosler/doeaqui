import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Doar from './Doar.jsx'
import Solicitar from './Solicitar.jsx';
import SobreNos from './SobreNos.jsx';
import Favoritos from './Favoritos.jsx';

const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/doar", Component: Doar}, 
  { path: "/solicitar", Component: Solicitar},
  { path: "/sobre", Component: SobreNos},
  { path: "/favoritos", Component: Favoritos},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)