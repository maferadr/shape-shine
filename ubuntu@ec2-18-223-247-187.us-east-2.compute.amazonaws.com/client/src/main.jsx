import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';


import App from './App.jsx';
import Home from './pages/Home.jsx';
import Meals from './pages/Meals.jsx';
import Workouts from './pages/Workouts.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'workouts',
        element: <Workouts/>
      },
      {
        path: 'meals',
        element: <Meals/>,
      },
      {
        path: 'login',
        element: <Login/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
