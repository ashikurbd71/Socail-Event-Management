import React, { useContext } from 'react';
import { Authcontext } from './../Provider/AuthPorvider';
import { Navigate, useLocation } from 'react-router-dom';
import loading from '../assets/Animation -loading.json'
import Lottie from 'lottie-react';
const Privteroute = ({children}) => {

    const{user,loader} = useContext(Authcontext)


    const location = useLocation()

    if(loader){

        return <div className='flex justify-center min-h-screen my-20'>
         <Lottie animationData={loading}  />;
        </div>
    }

    if(user){

        return children
    } else {
        return  <Navigate state={location.pathname} to={'/login'}></Navigate>

    }

       
    

   

};

export default Privteroute;