import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from '../../../firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscirbe = onAuthStateChanged(auth, (currentUser) => {
      //   console.log("auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscirbe();
    };
  }, []);

   const auth = getAuth(app)

    const signUpWithEmailPassword = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailPassword = (email, password)=> {
        return signInWithEmailAndPassword(auth, email,password)
    }
   

    const authInfo = {
         user, 
         signUpWithEmailPassword,
         loginWithEmailPassword
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;