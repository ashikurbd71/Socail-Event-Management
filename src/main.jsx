import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Route/Route'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthPorvider from './Provider/AuthPorvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthPorvider> 
    <RouterProvider router={router}></RouterProvider> 
   </AuthPorvider>
  </React.StrictMode>,
)
