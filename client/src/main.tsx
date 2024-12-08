import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ContactSection, ErrorPage, ExperienceSection, HomeSection, ProjectsSection, ToolsSection } from './components'

const router = createBrowserRouter([
  {
    path: '',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomeSection/>,       
      },
      {
        path: '/projects',
        element: <ProjectsSection/>
      },
      {
        path: '/tools',
        element: <ToolsSection/>
      },
      {
        path: '/contact',
        element: <ContactSection/>
      },
      {
        path: '/experience',
        element: <ExperienceSection/>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
