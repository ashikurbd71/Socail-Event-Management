import React from 'react';
import Banner from '../Component/Heading/Banner/Banner';
import Navber from "../Component/Heading/Navber/Navber";

const Home = () => {
    return (

        <div className='bg-[#141E46]'>
             <Navber></Navber>
            <Banner></Banner>
        </div>
    );
};

export default Home;