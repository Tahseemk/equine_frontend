import React, { useEffect } from "react";
import { useJwt } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/authSlice";
import { Navigate } from "react-router-dom";

const VerifyTokenHOC = (WrappedComponent) => {
    const HocComponent = ({ ...props }) => {
        const dispatch = useDispatch();
        const { accessToken } = useSelector((state) => state.auth);

        const { isExpired } = useJwt(accessToken);

        useEffect(() => {
            if (isExpired) {
                dispatch(logout());
            }
        }, [isExpired, dispatch]);

        if (isExpired) {
            return <Navigate to="/login" replace />;
        }

        return <WrappedComponent {...props} isTokenExpired={isExpired} />;
    };

    return HocComponent;
};

export default VerifyTokenHOC;
