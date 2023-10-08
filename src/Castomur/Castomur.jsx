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
    <div className="my-10 ">
      <h1 className="text-4xl font-bold text-center">Happy Customar</h1>

      <p className="py-5 text-center font-me font-medium text-[#141E46] text-xl lg:px-20">
        {" "}
        Testimonials from Our Happy Clients. Experience Excellence in Service,
        Quality, and Satisfaction, Reflecting Our Commitment to Deliver
        Outstanding Experiences and Build Lasting Relationships
      </p>

      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 content-center  my-8 gap-0">
        {comment?.map((comment) => (
          <Castomercard comment={comment} key={comment.name}></Castomercard>
        ))}
      </div>
    </div>
  );
};

export default Castomur;
