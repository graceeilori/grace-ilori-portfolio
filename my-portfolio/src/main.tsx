import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout.tsx'
import HomePage from './App.tsx'
import ProjectsPage from './Projects.tsx'
import KDramaWrappedPage from './KDramaWrapped.tsx'
import ComingSoonPage from './ComingSoon.tsx'
import Cpsc581Page from './Cpsc581.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/kdrama-wrapped" element={<KDramaWrappedPage />} />
          <Route path="/projects/cpsc-581" element={<Cpsc581Page />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
