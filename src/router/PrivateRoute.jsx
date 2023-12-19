import React, { useContext } from 'react';
import { FireBaseContext } from '../context/AuthContext';
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(FireBaseContext);
  if (loading) {
    return <Loading />
  }
  if (user) {
    return children;
  }
};

export default PrivateRoute;