import { Outlet } from "react-router-dom";

import Footer from "../Component/Heading/Footer/Footer";
import Navber from "../Component/Heading/Navber/Navber";

const Mainlayout = () => {
    return (
        <>

      
        <Navber></Navber>

        <div className=" min-h-screen">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>

        </>
    );
};

export default Mainlayout;