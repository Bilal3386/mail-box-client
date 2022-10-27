import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/authentication/auth-actions";
import classes from "./SignUp.module.css";

const SignUp = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputConfirmPasswordRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;
    const enteredConfirmPassword = inputConfirmPasswordRef.current.value;

    if (enteredPassword !== enteredConfirmPassword) {
      alert("Password don't match");
    } else {
      dispatch(signUp(enteredEmail, enteredConfirmPassword));
      inputEmailRef.current.value = "";
      inputPasswordRef.current.value = "";
      inputConfirmPasswordRef.current.value = "";
    }
  };
  return (
    <section className={classes.signUp}>
      <h2>SignUp</h2>
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
        <input
          autoComplete="on"
          name="password"
          type="password"
          placeholder="Confirm Password"
          required
          ref={inputConfirmPasswordRef}
        />
        <button>Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
