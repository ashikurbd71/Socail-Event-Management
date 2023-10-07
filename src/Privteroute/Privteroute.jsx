import React, { useContext } from 'react';
import { Authcontext } from './../Provider/AuthPorvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privteroute = ({children}) => {

    const{user} = useContext(Authcontext)

    const location = useLocation()

    if(user){

        return children
    } else {
        return  <Navigate state={location.pathname} to={'/login'}></Navigate>

    }

       
    

   

};

export default Privteroute;