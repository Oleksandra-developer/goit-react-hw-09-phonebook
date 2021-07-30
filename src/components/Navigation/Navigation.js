import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import styles from "../AuthNav/AuthNav.module.scss";

export default function Navigation() {
  const isLogged = useSelector(authSelectors.getIsAuthenticatad);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Homepage
      </NavLink>
      {isLogged && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
