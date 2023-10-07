import React, { useContext } from 'react';
import { Authcontext } from './../Provider/AuthPorvider';
import { Navigate } from 'react-router-dom';

const Privteroute = ({children}) => {

    const{user} = useContext(Authcontext)

    if(user){

        return children
    } else{

        <Navigate to={'/login'}></Navigate>
    }

    return (
        <div>
            
        </div>
    );
};

export default Privteroute;