import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container";
import { authOperations } from "./redux/auth";
import "./App.css";
import { useDispatch } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./components/views/HomeView"));
const LoginView = lazy(() => import("./components/views/LoginView"));
const Phonebook = lazy(() => import("./components/views/PhonebookView"));
const RegisterView = lazy(() => import("./components/views/RegisterView"));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Please, wait...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute restricted path="/register" component={RegisterView} />
          <PublicRoute restricted path="/login" component={LoginView} />
          <PrivateRoute path="/contacts" component={Phonebook} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}
