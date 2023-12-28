import { Navigate, useLocation } from "react-router";

import { useContext } from "react";
import { FireBaseContext } from "../context/AuthContext";
import Loading from "../components/Loading";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(FireBaseContext);
    const location = useLocation();

    if(loading){
        return <Loading />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/signIn" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;