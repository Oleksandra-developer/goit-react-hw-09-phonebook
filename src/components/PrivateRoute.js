import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../redux/auth";

export default function PrivateRoute({
  // isAuthenticated,
  children,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticatad);
  return (
    <Route {...routeProps}>
      {(props) => (isAuthenticated ? children : <Redirect to="/" />)}
    </Route>
  );
}

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticatad(state),
// });
// export default connect(mapStateToProps, null)(PrivateRoute);
