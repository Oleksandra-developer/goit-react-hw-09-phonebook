import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { authOperations } from "../../redux/auth";
import styles from "./UM.module.scss";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);
  const onLogout = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div>
      <span className={styles.text}>{userEmail}</span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
