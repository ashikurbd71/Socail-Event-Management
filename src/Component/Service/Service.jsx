import React, { useEffect, useState } from "react";
import Servicecard from "./Servicecard";

const Service = () => {
  const [events, setEvent] = useState([]);

  useEffect(() => {
    fetch("card.json")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);

  return (
    <div data-aos="fade-up"
    data-aos-duration="3000">
      <h1 className="lg:text-4xl text-2xl md:text-3xl  font-bold text-center dark:text-white">Our Service</h1>

      <div  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 px-5 lg:px-0" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        {events?.map((event) => (
          <Servicecard event={event} key={event.id}></Servicecard>
        ))}
      </div>
    </div>
  );
};

export default Service;
