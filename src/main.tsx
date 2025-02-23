import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import LogoDesign from './pages/LogoDesign.tsx';
import ProductDesign from './pages/ProductDesign.tsx';
import PosterDesign from './pages/PosterDesign.tsx';
import WebDesign from './pages/WebDesign.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/logo-design",
    element: <LogoDesign />,
  },
  {
    path: "/product-design",
    element: <ProductDesign />,
  },
  {
    path: "/poster-design",
    element: <PosterDesign />,
  },
  {
    path: "/web-design",
    element: <WebDesign />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);