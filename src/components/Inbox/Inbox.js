import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Inbox.module.css";
const Inbox = () => {
  const inboxEmail = useSelector((state) => state.compose.inboxEmail);
  console.log(inboxEmail);
  return (
    <section className={classes.inbox}>
      <h1>Received Mail</h1>
      {inboxEmail?.map((item) => {
        return (
          <div key={item.id}>
            <Link
              to="/emailDetails"
              state={item}
              style={{
                textDecoration: "none",
                color: `${item.read}`,
              }}
            >
              {item.senderEmail}{" "}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Inbox;
