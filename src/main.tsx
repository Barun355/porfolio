import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './page/Hero.tsx'
import Project from './page/Project.tsx'
import Contact from './page/Contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Hero />
      },
      {
        path: '/projects',
        element: <Project />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
