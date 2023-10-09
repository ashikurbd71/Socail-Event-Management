import React from "react";
import cover from "../../../assets/cover.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className="flex pb-5 px-10 justify-center py-10 lg:flex-row md:flex-row flex-col  bg-[#141E46]">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className ="w-1/2 "
        >
          <img src={cover} alt="" className="" />
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="w-1/2"
        >
          <h1 className="lg:text-4xl text-2xl  text-[#fff] lg:mt-9">
            <span className=" font-extrabold text-[#1AACAC] lg:text-5xl text-3xl">
              Expert Social
            </span>
            <br /> <span className=" font-extrabold">Event Management</span>
          </h1>

          <p className="lg:w-[600px] md:w-[500px] w-[300px] py-5  text-[#EEEEEE] font-medium text-lg">
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
              Contact <BsFillTelephoneFill></BsFillTelephoneFill>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
