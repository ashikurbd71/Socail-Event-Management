import React from 'react';
import Banner from '../Component/Heading/Banner/Banner';
import Navber from "../Component/Heading/Navber/Navber";
import Service from '../Component/Service/Service';

const Home = () => {
    return (

        <>

        <div className='bg-[#141E46]'>
      
            <Banner></Banner>
        </div>

          <div className='my-10 mx-auto  max-w-screen-xl'>
            <Service></Service>
          </div>

        </>
    );
};

export default Home;