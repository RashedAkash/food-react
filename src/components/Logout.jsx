import React, { useContext } from 'react';
import { FireBaseContext } from '../context/AuthContext';


const Logout = () => {
   const { logOut } = useContext(FireBaseContext);
   //logout
   const handlelogOut = () => {
    logOut()
    .then(() => {
  // Sign-out successful.
}).catch((error) => {
  console.log(error);
});
  }
  return (
    <div>
      <button onClick={handlelogOut} className='btn btn-success'>Logout</button>
    </div>
  );
};

export default Logout;