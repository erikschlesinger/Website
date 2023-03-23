import Login from './pages/Login'
import App from './pages/App'
import Contact from './pages/Contact'
import Impressum from './pages/impressum';
import AGBs from './pages/AGBs';
import About from './pages/About';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/App",
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
    path: "About",
    element: <About />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
