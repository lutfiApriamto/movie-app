// Main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./assets/Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserSearch from "./assets/Pages/UserSearch";
import { SearchProvider } from './assets/Context/SearchContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/usersearch",
    element: <UserSearch />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </React.StrictMode>,
);
