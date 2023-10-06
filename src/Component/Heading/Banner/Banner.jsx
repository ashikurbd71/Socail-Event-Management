import React from "react";
import cover from "../../../assets/cover.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className="flex px-24 lg:flex-row flex-col bg-[#141E46]  mt-5    ">
        <div>
          <img src={cover} alt="" className=" w-[500px]" />
        </div>

        <div>
          <h1 className="lg:text-4xl text-2xl  text-[#fff] mt-9">
            <span className=" font-extrabold text-[#1AACAC] lg:text-5xl text-3xl">
              Expert Social
            </span>
            <br /> <span className=" font-extrabold">Event Management</span>
          </h1>

          <p className="lg:w-[600px] w-[300px] py-5 text-[#EEEEEE] font-medium text-lg">
            Social event management involves the strategic planning,
            coordination, and execution of various social gatherings, parties,
            and events to create enjoyable and memorable experiences for
            attendees. These events can range from intimate gatherings to
            large-scale celebrations, including weddings, birthday parties,
            corporate events, galas, and more.
          </p>

          <Link to={"/contect"}>
            {" "}
            <button className="btn btn-outline btn-success px-10 ">
              Contect <BsFillTelephoneFill></BsFillTelephoneFill>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
