
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
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> },
  { path: '/services/marketing-strategique', element: <ServiceMarketing /> },
  { path: '/services/assistance-administrative', element: <ServiceAdmin /> },
  { path: '/services/precomptabilite', element: <ServicePrecompta /> },
  { path: '/services/support-informatique', element: <ServiceSupport /> },
  { path: '/tarifs', element: <Pricing /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <Article /> },
  { path: '/contact', element: <Contact /> },
])

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)
