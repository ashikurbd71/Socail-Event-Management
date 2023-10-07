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
        <div className='my-10 '>
            <h1 className='text-4xl text-center font-bold'>Our Team</h1>

               <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10 '>
                {
                    teams?.map(team => <Teamcard team={team} key={team}></Teamcard>)
                }
               </div>
        </div>
    );
};

export default Team;