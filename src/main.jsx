import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
    
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'applied jobs',
        element: <AppliedJobs/>
      },
      {
        path: 'blog',
        element: <Blog/>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
