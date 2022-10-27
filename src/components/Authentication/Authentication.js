import React from "react";
import { useState } from "react";
import classes from "./Authentication.module.css";
import Button from "../UI/Button";
import SignUp from "./SignUp";
import Login from "./Login";

const Authentication = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const haveAccountHandler = () => {
    setHaveAccount(false);
  };
  const dontHaveAccountHandler = () => {
    setHaveAccount(true);
  };
  return (
    <section className={classes.auth}>
      {!haveAccount && <SignUp />}
      {haveAccount && <Login />}
      {haveAccount && (
        <Button onClick={haveAccountHandler}>
          Don't have an account? Sign up
        </Button>
      )}
      {!haveAccount && (
        <Button onClick={dontHaveAccountHandler}>Have an account? Login</Button>
      )}
    </section>
  );
};

export default Authentication;
