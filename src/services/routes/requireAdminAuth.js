import { Navigate, useLocation } from "react-router";
import React from 'react';
import store from "../../services/store";
import { UserRole } from "../utils/enums/auth";


function RequireAdminAuth({ children }) {
    let location = useLocation();
    const state = store.getState(state => state.auth.token);
    const authToken = state.auth.token;

    if (!authToken) {
        return <Navigate to="/sign-in-up" state={{ from: location }} replace />
    }
    if (state.auth.role != UserRole.ADMIN) {
        return <Navigate to="/" replace />;
    }

    return children;
}


export default RequireAdminAuth;
