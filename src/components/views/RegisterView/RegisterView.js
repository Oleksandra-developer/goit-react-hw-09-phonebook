import React, { useState } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import styles from "./RegisterView.module.scss";

const RegisterView = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <h1 className={styles.title}>Register now, please</h1>
      <form
        onSubmit={handleSubmit}
        className={styles.loginBox}
        autoComplete="off"
      >
        <label className={styles.userBox}>
          Name
          <input
            autoComplete="off"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.userBox}>
          E-mail
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.userBox}>
          Password
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  onSubmit: authOperations.register,
};
export default connect(null, mapDispatchToProps)(RegisterView);
