import Login from './src/pages/Login'
import App from './src/pages/App'
import Contact from './src/pages/Contact'
import Impressum from './src/pages/impressum';
import AGBs from './src/pages/AGBs';
import About from './src/pages/About';
import Shop from './src/pages/Shop';
import News from './src/pages/News';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './src/reportWebVitals';
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
    path: "/About",
    element: <About />
  },
  {
    path: "Shop",
    element: <Shop />
  },
  {
    path: "News",
    element: <News />
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
