import React, { useContext } from 'react';
import { FireBaseContext } from '../context/AuthContext';
import Loading from '../components/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
   const location = useLocation();
  const { user, loading } = useContext(FireBaseContext);
  if (loading) {
    return <Loading />
  }
  if (user) {
    return children;
  }
   return <Navigate to="/signIn" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;