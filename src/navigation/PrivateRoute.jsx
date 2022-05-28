import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext)
    let location = useLocation();

    if (isLoggedIn) {
        return children;
    }
    return <Navigate to="/registration" state={{ from: location }} replace />;
}

export default PrivateRoute;