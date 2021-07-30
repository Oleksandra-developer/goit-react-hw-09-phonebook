import React, { useState } from "react";
import { connect } from "react-redux";
import authOperations from "../../../redux/auth/auth-operations";
import styles from "../RegisterView/RegisterView.module.scss";

function LoginView({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
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
    onLogin({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className={styles.title}>Nice to meet you! </h1>
      <h3 className={styles.title}>Enter, please</h3>

      <form
        onSubmit={handleSubmit}
        className={styles.loginBox}
        autoComplete="off"
      >
        <label className={styles.userBox}>
          E-mail
          <input
            // className={styles.input}
            type="email"
            placeholder="Enter your e-mail"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.userBox}>
          Password
          <input
            // className={styles.input}
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.button}>
          Enter
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(LoginView);
