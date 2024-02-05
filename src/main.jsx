import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import { tasks } from "./mock/tasks.mock";
import Tasks from './views/Tasks/Tasks';
import Organization from './views/Organization/Organization'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Tasks/>
  },
  {
    path: "/organization",
    element: <Organization/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
