import React, { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import PRoute from "./PrivateRoute";
import { useLocation, useRoutes } from "react-router-dom";
// import LogoutModal from "../Components/Modals/LogoutModal";
import PublicRoute from "./PublicRoute";
import Dashboard from "../Pages/Dashboard";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ResetPassword from "../Pages/ResetPassword";
import ForgetPassword from "../Pages/ForgetPassword";
import Error404 from "../Pages/Error404";
import Admin from "../Pages/Admin/Admin";
import Login from "../Pages/Admin/Login";

// import GigsNearMe from "../Pages/GigsNearMe";
   
export default function MainRouter() {
 

  const routes = useRoutes([
    {
      path: "/*",
      element: (
        <PRoute>
          <Error404 />
        </PRoute>
      ),
    },
 
    {
      path: "/forgot-password",
      element: (
        <PublicRoute>
          <ForgetPassword />
        </PublicRoute>
      ),
    },
    {
      path: "/reset-password",
      element: (
        <PublicRoute>
          <ResetPassword />
        </PublicRoute>
      ),
    },

    { path: "/", element: <Dashboard /> }, 
    { path: "/sign-in", element: <SignIn /> },
    { path: "/sign-up", element: <SignUp /> }, 

    

    { path: "/admin", element: <Admin /> }, 
    { path: "/admin-sign-in", element: <Login /> },
  ]);

  return (
    <>
      {/* <LogoutModal /> */}
      {routes}
      <Toaster position='top-center' reverseOrder={false} />
    </>
  );
}
