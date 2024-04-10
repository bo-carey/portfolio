import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';

const isProduction = import.meta.env.MODE === 'production';

const routes = [
  <Route path="/" element={<HomePage />} />,
  <Route path="/about" element={<AboutPage />} />,
  <Route path="/projects" element={<ProjectsPage />} />,
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {isProduction ? (
          <Route path="/portfolio" element={<HomePage />}>
            {routes}
          </Route>
        ) : (
          routes
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
