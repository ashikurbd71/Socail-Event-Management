import React from "react";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Teamcard = ({ team }) => {
  const { img, name, job_title, description } = team;

  return (
    <>
      <div className=" px-5 lg:px-0">
        <div className="w-full  bg-[#141E46] text-[#fff] border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full border-2 shadow-lg"
              src={img}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-[#1AACAC] dark:text-white">
             {name}
            </h5>
            <h5 className="mb-1 text-xl font-semibold text-[#fff] dark:text-white">
             {job_title}
            </h5>
            <span className="text-sm text-center px-3 text-[#fff] dark:text-gray-400">
          {description}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <FaFacebook className="text-2xl" />
              <FaLinkedin className="text-2xl" />
              <FaInstagram className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamcard;
