import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Pages/Mainlayout";
import About from "../Pages/About";

import Home from "../Pages/Home";
import Contect from "../Pages/Contect";
import Serviceinfo from "../Component/Service/Serviceinfo";

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
        },
    {
        path:"/serviceinfo/:id",
        element:<Serviceinfo></Serviceinfo>,
        loader: ()=> fetch('/card.json')
    }


    ]
    
    
   
  },
]);

export default router;
