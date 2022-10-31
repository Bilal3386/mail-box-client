import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import classes from "./MailDetail.module.css";
import { afterReadingMail } from "../../store/compose/compose-actions";

const MailDetail = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const item = location.state;
  if(location.pathname === '/emailDetails')
  {
    console.log('hello')
    if(item.read === 'red')
    {
        console.log(item.email)
        dispatch(afterReadingMail(item.senderEmail, item.text, item.id))
    }
  }
  return (
    <section className={classes["mail-details"]}>
      <span>From:</span>
      <br />
      <h2>{item.senderEmail}</h2>
      <br />
      <span>Subject:</span>
      <br />
      <p>{item.text}</p>
    </section>
  );
};

export default MailDetail;
