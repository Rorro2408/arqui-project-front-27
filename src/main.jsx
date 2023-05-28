import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Importar páginas
import Root from './pages/root'
import Login from './pages/login'
import Register from './pages/register'
import Events from './pages/events'
import About from './pages/about'
import Contact from './pages/contact'
import Requests from './pages/requests'
import Wallet from './pages/wallet'

// Linkear rutas a páginas
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/events",
      element: <Events />,

    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/requests",
      element: <Requests />
    },
    {
      path: "/wallet",
      element: <Wallet />
    }
  ]
)

// Instanciar el enrutador
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
