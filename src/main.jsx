import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Books from './components/Books'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'books',
                element: <Books></Books>,
                loader: () => fetch('https://api.itbook.store/1.0/new')
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
