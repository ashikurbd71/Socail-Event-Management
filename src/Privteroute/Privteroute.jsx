import React, { useContext } from 'react';
import { Authcontext } from './../Provider/AuthPorvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privteroute = ({children}) => {

    const{user,loader} = useContext(Authcontext)


    const location = useLocation()

    if(loader){

        return <div className='flex justify-center my-20'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if(user){

        return children
    } else {
        return  <Navigate state={location.pathname} to={'/login'}></Navigate>

    }

       
    

   

};

export default Privteroute;