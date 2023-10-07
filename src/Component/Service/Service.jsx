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
    <div>
      <h1 className="text-4xl font-bold text-center">Our Service</h1>

      <div  className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10 px-5 lg:px-0">
        {events?.map((event) => (
          <Servicecard event={event} key={event.id}></Servicecard>
        ))}
      </div>
    </div>
  );
};

export default Service;
