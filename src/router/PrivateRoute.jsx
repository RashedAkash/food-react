import { Navigate, useLocation } from "react-router";

import { useContext } from "react";
import { FireBaseContext } from "../context/AuthContext";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(FireBaseContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/signIn" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;