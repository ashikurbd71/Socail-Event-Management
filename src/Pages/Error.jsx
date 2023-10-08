import React from 'react';
import error from '../assets/error.jpg'
import Navber from '../Component/Heading/Navber/Navber';
import Footer from '../Component/Heading/Footer/Footer';

const Error = () => {
    return (

        <>
        <Navber></Navber>
        <div className='flex justify-center min-h-screen mx-auto max-w-screen-xl'>
     <img src={error} alt="" className=' '/>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Error;