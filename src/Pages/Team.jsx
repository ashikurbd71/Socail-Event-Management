import React, { useEffect, useState } from "react";
import Teamcard from "./Teamcard";

const Team = () => {
  const [teams, setTeam] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  });

  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
       className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 content-center  my-8 gap-0">
      <h1 className="lg:text-4xl text-2xl md:text-3xl text-center font-bold">
        Meet Our Team
      </h1>

      <div
        className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mt-10 "
       
      >
        {teams?.map((team) => (
          <Teamcard team={team} key={team}></Teamcard>
        ))}
      </div>
    </div>
  );
};

export default Team;
