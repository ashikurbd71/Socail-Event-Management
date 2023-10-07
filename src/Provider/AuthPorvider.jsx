

import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Friebase';

 export const Authcontext = createContext(null)

 const Googleprovider = new GoogleAuthProvider()
 const Githubprovider = new GithubAuthProvider()

const AuthPorvider = ({children}) => {

      const [user,setUser] =useState(null)


// Googlesignin
                                                                                 
const Googlesigin = () => {

     return signInWithPopup(auth,Googleprovider)
}


// Githubprovider

const Gitsigin = () => {

    return signInWithPopup(auth,Githubprovider)
}

// obsever

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth,(currentuser) => {

           setUser(currentuser)
    })

    return () => {

        unsubscribe()
    }

  },[])

//   createuse

   const createuser = (email,password) => {

     return createUserWithEmailAndPassword(auth,email,password)
   }

// signinuser

const signinuser = (email,password) => {

    return signInWithEmailAndPassword(auth,email,password)
}

   const Authdata = {
    user,
    Googlesigin,
    Gitsigin,
    createuser,
    signinuser
}


    return (
    
         <Authcontext.Provider value={Authdata}>
            {children}
         </Authcontext.Provider >
    );
};

export default AuthPorvider;