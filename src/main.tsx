import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/" element={<HomePage />} />,
        <Route path="/portfolio/about" element={<AboutPage />} />,
        <Route path="/portfolio/projects" element={<ProjectsPage />} />,
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
