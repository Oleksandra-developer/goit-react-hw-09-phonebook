import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container";
import { authOperations } from "./components/redux/auth";
import "./App.css";
import { connect } from "react-redux";
import PrivaeRoute from "./components/PrivaeRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./components/views/HomeView"));
const LoginView = lazy(() => import("./components/views/LoginView"));
const Phonebook = lazy(() => import("./components/views/PhonebookView"));
const RegisterView = lazy(() => import("./components/views/RegisterView"));

function App({ getCurrentUser }) {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Please, wait...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute restricted path="/register" component={RegisterView} />
          <PublicRoute restricted path="/login" component={LoginView} />
          <PrivaeRoute path="/contacts" component={Phonebook} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
