import React from "react";
import { Link } from "react-router-dom";

const Servicecard = ({ event }) => {
  const { name, price, description, image } = event;
  console.log(event);
  return (
    <div>
      <div className=" border border-gray-20 rounded-lg shadow bg-[#141E46] ">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[250px]"
            src={image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-[#1AACAC] text-2xl font-bold tracking-tight  dark:text-white">
             {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-[#fff] dark:text-gray-400">
            {description}
          </p>
         
         <div className="flex jus justify-between items-center">
         <Link> <button className="btn btn-outline btn-success  ">View Details</button></Link>

           <div className="text-lg font font-semibold text-[#fff]">
            Price : {price}<span>$</span>
           </div>
         </div>

        </div>
      </div>
    </div>
  );
};

export default Servicecard;
