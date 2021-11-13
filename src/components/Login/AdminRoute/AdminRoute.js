import { CircularProgress } from "@mui/material";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  if (!admin || isLoading) {
    return <CircularProgress color='success' />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default AdminRoute;
