import React, { useEffect, useState } from "react";
import Castomercard from "./Castomercard";

const Castomur = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch("comment.json")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  return (
    <div className="my-10 "data-aos="fade-up"
    data-aos-duration="3000" >
      <div>
        <h1 className="lg:text-4xl text-2xl md:text-3xl  font-bold text-center">
          Happy Customar
        </h1>

        <p className="py-5 text-center font-me font-medium text-[#141E46] lg:text-xl text-lg lg:px-20">
          {" "}
          Testimonials from Our Happy Clients. Experience Excellence in Service,
          Quality, and Satisfaction, Reflecting Our Commitment to Deliver
          Outstanding Experiences and Build Lasting Relationships
        </p>
      </div>
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
        className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 content-center  my-8 gap-0"
      
      >
        {comment?.map((comment) => (
          <Castomercard comment={comment} key={comment.name}></Castomercard>
        ))}
      </div>
    </div>
  );
};

export default Castomur;
