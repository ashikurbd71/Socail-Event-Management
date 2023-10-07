import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Pages/Mainlayout";
import About from "../Pages/About";

import Home from "../Pages/Home";
import Contect from "../Pages/Contect";
import Serviceinfo from "../Component/Service/Serviceinfo";
import Login from "../Form/Login";
import Register from "../Form/Register";
import Privteroute from "../Privteroute/Privteroute";

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
        element:<Privteroute><Serviceinfo></Serviceinfo></Privteroute>,
        loader: ()=> fetch('/card.json')
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    }




    ]
    
    
   
  },
]);

export default router;
