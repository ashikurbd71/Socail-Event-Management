import { Outlet } from "react-router-dom";

import Footer from "../Component/Heading/Footer/Footer";


const Mainlayout = () => {
    return (
        <>

      
       

        <div className=" min-h-screen">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>

        </>
    );
};

export default Mainlayout;