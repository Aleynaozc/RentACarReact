import { Navigate, useLocation } from "react-router";
import React from 'react';
import store from "../../services/store";

function RequireUserAuth({ children }) {
    let location = useLocation();
    const state = store.getState(state => state.auth.token);
    const authToken = state.auth.token;

    if (!authToken) {
        return <Navigate to="/sign-in-up" state={{ from: location }} replace />
    }


    return children;
}

export default RequireUserAuth;



