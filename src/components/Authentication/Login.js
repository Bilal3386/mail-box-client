import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authentication/auth-actions";
import classes from "./Login.module.css";

const Login = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;
    dispatch(login(enteredEmail, enteredPassword));
    inputEmailRef.current.value = "";
    inputPasswordRef.current.value = "";
  };

  return (
    <section className={classes.login}>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <input
          autoComplete="on"
          name="email"
          type="email"
          placeholder="Email"
          required
          ref={inputEmailRef}
        />
        <input
          autoComplete="on"
          name="password"
          type="password"
          placeholder="Password"
          required
          ref={inputPasswordRef}
        />
        <button>Sign Up</button>
      </form>
    </section>
  );
};

export default Login;
