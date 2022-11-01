import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteInboxMessage } from "../../store/compose/compose-actions";
import classes from "./Inbox.module.css";
const Inbox = () => {
  const inboxEmail = useSelector((state) => state.compose.inboxEmail);
  const dispatch = useDispatch();
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
            <button onClick={() => dispatch(deleteInboxMessage(item.id))}>
              DELETE
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Inbox;
