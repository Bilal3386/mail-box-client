import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const inboxEmail = useSelector((state) => state.compose.inboxEmail);

  const unreadQuantity = inboxEmail.reduce(
    (ack, val) => (val.read === "red" ? ack + 1 : 0),
    1
  );
  console.log(unreadQuantity);
  const logOutHandler = () => {};
  return (
    <header className={classes.header}>
      <h2>Welcome to Mail Box!!!</h2>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/inbox"
              className={({ isActive }) =>
                isActive ? classes.active : "inactive"
              }
              end
            >
              Inbox
              {unreadQuantity === 0 ? (
                <></>
              ) : (
                <span>{unreadQuantity} Unread</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/compose"
              className={({ isActive }) =>
                isActive ? classes.active : "inactive"
              }
              end
            >
              Compose
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                to="/Auth"
                className={({ isActive }) =>
                  isActive ? classes.active : "inactive"
                }
                end
              >
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <button className={classes.btn} onClick={logOutHandler}>
              LogOut
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
