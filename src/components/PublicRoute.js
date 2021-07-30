import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../redux/auth";

export default function PublicRoute({ children, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticatad);
  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to="/" />
      ) : (
        children
      )}
    </Route>
  );
}
