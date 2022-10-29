import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./MailDetail.module.css";

const MailDetail = () => {
  const location = useLocation();
  const item = location.state;
  return (
    <section className={classes["mail-details"]}>
      <span>From:</span>
      <br />
      <h2>{item.email}</h2>
      <br />
      <span>Subject:</span>
      <br />
      <p>{item.text}</p>
    </section>
  );
};

export default MailDetail;
