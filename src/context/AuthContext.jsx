import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {auth} from '../Firebase/Firebase.config'

export const FireBaseContext = createContext('null')

const AuthContext = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)
  

  
//google sign in
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  //sign up
  const SignUp = (email, password) => {
    setLoading(true)
  return  createUserWithEmailAndPassword(auth, email, password)
 }
  //sign in
  const SignIn = (email, password) => {
    setLoading(true)
  return  signInWithEmailAndPassword(auth, email, password)
  }
  
  //logout
    const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  // manage user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      
  if (user) {
    setLoading(false);
  } else {
     setLoading(false);
  }
  });
   
    return () => {
      return unSubscribe();
    }
  },[])

  
  const values = {
    user,
    loading,
    googleSignIn,
    SignUp,
    SignIn,
    logOut
    
  }
  return (
    <FireBaseContext.Provider value={values}>
      {children}
    </FireBaseContext.Provider>
  );
};

export default AuthContext;