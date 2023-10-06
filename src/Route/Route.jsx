import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Pages/Mainlayout";
import About from "../Pages/About";

import Home from "../Pages/Home";
import Contect from "../Pages/Contect";

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

            path:"/about",
            element:<About></About>
        },

        {

            path:"/contect",
            element:<Contect></Contect>
        }


    ]
    
    
   
  },
]);

export default router;
