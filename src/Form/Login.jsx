import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Media from "../Media/Media";
import { Authcontext } from "../Provider/AuthPorvider";
import toast from "react-hot-toast";

const Login = () => {
  const [showpass, setShowpass] = useState(false);
  const { signinuser } = useContext(Authcontext);
  const location = useLocation()

  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return toast.error("provide right email!");
    }

    if (password.length < 6) {
      return toast.error("password must be 6 chracter!");
    }

    signinuser(email, password)
      .then((result) => {
        console.log(result.user);

        navigate(location?.state ? location?.state : "/")
        return toast.success("Login Successfuly!");
    

      })
      .catch((error) => {
        console.log(error.message);

        return toast.error(error.message);
      });

    console.log(email, password);
  };

  return (
    <div className="">
      <div className="px-5 lg:px-0 my-10 min-h min-h-screen flex justify-center items-center">
        <div className="w-full max-w-sm p-4 bg-[#141E46] border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <form onSubmit={handlesubmit} className="space-y-6" action="#">
            <h5 className="text-[30px] font-bold text-[#1AACAC]  dark:text-white text-center">
              Login your account
            </h5>

            <div>
              <label
                htmlFor="email"
                className="block mb-2    dark:text-white  text-[#fff] font-semibold text-[20px]"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                // ref={emailRef}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2   text-[#fff] font-semibold text-[20px]dark:text-white "
              >
                Password
              </label>
              <input
                type={showpass ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />

              <div className="relati relative bott bottom-8 flex justify-end pr-5">
                <button onClick={() => setShowpass(!showpass)}>
                  {showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </button>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-[#fff] dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <button className="ml-auto text-sm hover:underline dark:text-blue-500 text-[#1AACAC] ">
                Lost Password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[#1AACAC]   focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <div className=" text-[#fff] text-[16px] font-medium dark:text-gray-300">
              Dont’t Have An Account ?{" "}
              <Link to={"/register"}>
                <a
                  href="#"
                  className="text-[#1AACAC] hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </Link>
            </div>
            <Media></Media>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
