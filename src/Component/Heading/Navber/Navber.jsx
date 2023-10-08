import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../../Provider/AuthPorvider";
import toast from "react-hot-toast";
import users from '../../../assets/user.png'

const Navber = () => {

  const{user,siginout} =useContext(Authcontext)

   const handlesiginout = () => {

    siginout()
      .then((result) => {
        console.log(result.user);
        return toast.success("Logout Successfuly!");
      })
      .catch((error) => {
        console.log(error.message);

        return toast.error(error.message);
      });


   }
  return (
    <div>
      <div className="navbar bg-[#141E46] pb-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content mt-3  z-[1] p-2 shadow  rounded-box w-52"
            >
              <li className="text-lg font-bold ">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-green-500" : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="text-lg font-bold ">
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-green-500" : ""
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="text-lg font-bold">
                <NavLink
                  to="/contect"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-green-500" : ""
                  }
                >
                  Contect
                </NavLink>
              </li>
            </ul>
          </div>
           <Link to={"/"}>  <a  className="btn btn-ghost font-bold normal-case lg:text-3xl text-xl text-[#EEEEEE]">
            Social <span className="lg:text-2xl text-lg text-[#088395]">Events</span>
          </a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1 text-[#fff]">
            <li className="text-lg font-bold mr-5">
              {" "}
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-500" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li className="text-lg font-bold mr-5">
              {" "}
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-500 " : ""
                }
              >
                About
              </NavLink>
            </li>

            <li className="text-lg font-bold">
              {" "}
              <NavLink
                to="/contect"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-500" : ""
                }
              >
                Contect
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">

          <div>

     {

      user ?  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        
        <li className="text-xl font-semibold"><h1>{user?.displayName}</h1></li>
        <li className="text-xl font-semibold"><h1>{user?.email}</h1></li>
       <Link onClick={handlesiginout}> <li className="text-xl font-semibold"><button>Logout</button></li></Link>
         
  
      </ul>
    </div> : <div className="avatar">
  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={users} className="w-8"/>
  </div>
</div>

         
     }

      

         
          </div>

          
    <Link to={'/login'}> <button className="btn btn-outline btn-success ml-4 ">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
