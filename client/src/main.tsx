import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeSection from './components/HomeSection.tsx'
import ProjectsSection from './components/ProjectsSection.tsx'
import ToolsSection from './components/ToolsSection.tsx'
import ContactSection from './components/ContactSection.tsx'
import ExperienceSection from './components/ExperienceSection.tsx'

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
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
