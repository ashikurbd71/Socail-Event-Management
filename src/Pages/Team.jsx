import React, { useEffect, useState } from 'react';
import Teamcard from './Teamcard';

const Team = () => {

      const[teams,setTeam] = useState([])

      useEffect(() => {

    fetch('team.json')   
    .then(res => res.json())
    .then(data => setTeam(data))


      })

    return (
        <div className='my-20 '  data-aos="fade-up"
        data-aos-duration="3000">
            <h1 className='lg:text-4xl text-2xl md:text-3xl text-center font-bold'>Meet Our Team</h1>

               <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mt-10 '  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                {
                    teams?.map(team => <Teamcard team={team} key={team}></Teamcard>)
                }
               </div>
        </div>
    );
};

export default Team;