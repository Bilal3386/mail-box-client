import React from 'react'
import classes from './SentMail.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SentMail = () => {
    const sentMail = useSelector(state => state.compose.sentMail)
  return (
    <section className={classes.sentMail}>
      <h1>Received Mail</h1>
      {sentMail?.map((item) => {
        return (
          <div key={item.id}>
            <Link
              to="/sentEmailDetails"
              state={item}
              style={{
                textDecoration: "none",
                color: `${item.read}`,
              }}
            >
              {item.email}{" "} {item.text}
            </Link>
            
          </div>
        );
      })}
    </section>
  )
}

export default SentMail