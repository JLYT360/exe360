
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Article from './pages/Article'
import ServiceMarketing from './pages/ServiceMarketing'
import ServiceAdmin from './pages/ServiceAdmin'
import ServicePrecompta from './pages/ServicePrecompta'
import ServiceSupport from './pages/ServiceSupport'
import './styles.css'

const router = createBrowserRouter([
  { path: '/jlytexe-site/', element: <Home /> },
  { path: '/jlytexe-site/services', element: <Services /> },
  { path: '/jlytexe-site/services/marketing-strategique', element: <ServiceMarketing /> },
  { path: '/jlytexe-site/services/assistance-administrative', element: <ServiceAdmin /> },
  { path: '/jlytexe-site/services/precomptabilite', element: <ServicePrecompta /> },
  { path: '/jlytexe-site/services/support-informatique', element: <ServiceSupport /> },
  { path: '/jlytexe-site/tarifs', element: <Pricing /> },
  { path: '/jlytexe-site/blog', element: <Blog /> },
  { path: '/jlytexe-site/blog/:slug', element: <Article /> },
  { path: '/jlytexe-site/contact', element: <Contact /> },
])

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)
