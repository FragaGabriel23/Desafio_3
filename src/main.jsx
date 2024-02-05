import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import { tasks } from "./mock/tasks.mock";
import Tasks from './views/Tasks/Tasks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Tasks/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
