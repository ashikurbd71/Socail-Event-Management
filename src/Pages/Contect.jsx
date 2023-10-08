import React from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import contect from "../assets/contect.jpg";

const Contect = () => {
  return (
    <div>
      <div className="flex gap-10 pb-5 px-24 lg:flex-row md:flex-row flex-col bg-[#141E46]      ">
        <div>
          <img src={contect} alt="" className=" lg:w-[500px] md:w-[500px]" />
        </div>

        <div>
          <h1 className="lg:text-4xl text-2xl  text-[#fff] ">
            <span className=" font-extrabold text-[#1AACAC] lg:text-5xl text-3xl">
              Contect
            </span>
            <span className=" font-extrabold">Us</span>
          </h1>

          <p className="lg:w-[600px] md:w-[500px] w-[300px] py-5 text-[#EEEEEE] font-medium text-lg">
            Ready to turn your event dreams into reality? Reach out to us!
            Whether you're planning a wedding, a milestone celebration, or a
            corporate gathering, we're here to assist. Feel free to call, email,
            or fill out the contact form below. Let's collaborate and make your
            event extraordinary.Feel free to tailor this description with your
            specific contact details and any additional information you'd like
            to provide
          </p>

          <Link to={"/"}>
            {" "}
            <button className="btn btn-outline btn-success px-10 ">Home</button>
          </Link>
        </div>
      </div>

      <div className="my-10 mx-auto max-w-screen-xl">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Contact From!</h1>
              <p className="py-6 text-xl font-medium">
                Have a question or need assistance? We're here to help! Feel
                free to reach out to us using the contact information provided
                below. Whether you're looking to plan an event, inquire about
                our services, or simply want to say hello, we'd love to hear
                from you.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body bg-[#141E46] ">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-[#fff] text-xl fon">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-[#fff] text-xl font-semibold">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="subject"
                    className="input input-bordered"
                    required
                  />
                 
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-[#fff] text-xl font-semibold">Message</span>
                  </label>
                 
                  <textarea name="" id="" cols="20" rows="6" placeholder="Message"></textarea>
                 
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-[#1AACAC] border-none text-[#fff] ">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
