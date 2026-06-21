import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login.jsx'
import Home from './Home.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Notfound from './Notfound.jsx'



const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Notfound/>
  },
  {
    path:'/login',
    element:<Login/>
  }
]);

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
    
 
)
