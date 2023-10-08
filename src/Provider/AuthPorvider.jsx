

import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Friebase';

 export const Authcontext = createContext(null)

 const Googleprovider = new GoogleAuthProvider()
 const Githubprovider = new GithubAuthProvider()


const AuthPorvider = ({children}) => {

      const [user,setUser] = useState(null)
      const [loader,setLoader] = useState(true)



// Googlesignin
                                                                                 
const Googlesigin = () => {
setLoader(true)
     return signInWithPopup(auth,Googleprovider)
}


// Githubprovider

const Gitsigin = () => {
  setLoader(true)
    return signInWithPopup(auth,Githubprovider)
}

// obsever

useEffect(() => {
  const unsbcribe = onAuthStateChanged(auth, (user) => {
    setLoader(false)
    setUser(user);
  });

  return () => {
    unsbcribe();
  };
}, []);


//   createuse

   const createuser = (email,password) => {
    setLoader(true)
     return createUserWithEmailAndPassword(auth,email,password)
   }

// signinuser

const signinuser = (email,password) => {
  setLoader(true)
    
    return signInWithEmailAndPassword(auth,email,password)
}

// siginout

const siginout = () => {
  setLoader(true)
  return signOut(auth)
}

   const Authdata = {
    user,
    Googlesigin,
    Gitsigin,
    createuser,
    signinuser,
    siginout,
    loader
}


    return (
    
         <Authcontext.Provider value={Authdata}>
            {children}
         </Authcontext.Provider >
    );
};

export default AuthPorvider;