import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function LogRegRouteProtection(){


    const isAuth = localStorage.getItem("isLoggedUser");

   return !isAuth ? <Outlet /> : <Navigate to={"/profile"}/>;

}
export default LogRegRouteProtection;
