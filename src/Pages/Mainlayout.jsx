import { Outlet } from "react-router-dom";
import Navber from "../Component/Heading/Navber/Navber";
import Footer from "../Component/Heading/Footer/Footer";


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