import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from '../Firebase/Firebase.config'

export const FireBaseContext = createContext('null')

const AuthContext = ({children}) => {
  const [user, setUser] = useState("joy");
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
  const signOut= ()=>{
 return   signOut(auth)
 }

  
  const values = {
    user,
    loading,
    googleSignIn,
    SignUp,
    SignIn,
    signOut
    
  }
  return (
    <FireBaseContext.Provider value={values}>
      {children}
    </FireBaseContext.Provider>
  );
};

export default AuthContext;