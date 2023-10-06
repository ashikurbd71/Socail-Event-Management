import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Pages/Mainlayout";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,

    children:[

        {
            path:"/",
            element:<Home></Home>
        },

        {

            path:"about",
            element:<About></About>
        },

        {

            path:"profile",
            element:<Profile></Profile>
        }


    ]
    
    
   
  },
]);

export default router;
