import React from "react";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import styles from "./AppBar.module.scss";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

export default function AppBar() {
  const isLogged = useSelector(authSelectors.getIsAuthenticatad);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

// //
// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticatad(state),
// });
// export default connect(mapStateToProps, null)(AppBar);
