import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  return (
    <>
      {localStorage.getItem("mia-useId") ? (
        <Outlet />
      ) : (
        <Navigate to="/MiaPostNpim" />
      )}
    </>
  );
};

export default PrivateComponent;
