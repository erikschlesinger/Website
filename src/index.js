import Login from './pages/Login'
import App from './pages/App'
import Contact from './pages/Contact'
import Impressum from './pages/impressum';
import AGBs from './pages/AGBs';
import About from './pages/About';
import Shop from './pages/Shop';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Contact",
    element: <Contact />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Impressum",
    element: <Impressum />
  },
  {
    path: "/AGBs",
    element: <AGBs />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Shop",
    element: <Shop />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
