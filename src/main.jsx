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
import Statistics from './components/Statistics';
import JobDetail from './components/JobDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/public/JobsCategory.json')
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'applied jobs',
        element: <AppliedJobs />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'job-detail/:id',
        element: <JobDetail/>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
