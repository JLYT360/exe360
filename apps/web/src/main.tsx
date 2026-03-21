import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import './styles.css'

const router = createBrowserRouter([
  { path: '/', element: <><ScrollRestoration /><Home /></> },
  { path: '/contact', element: <><ScrollRestoration /><Contact /></> },
  { path: '*', element: <Navigate to="/" replace /> }
])

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)
