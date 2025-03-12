import React from "react";
import classes from "./Card.module.css";
export default function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.logo}>{props.logo}</div>
      <div className={classes.text}>
        <h5 className={classes.h5s}>{props.text}</h5>
        {/* <p className={classes.paragraphs}>{props.text}</p> */}

        <p className={classes.paragraphs}>{props.detail}</p>
        <button className={classes.buttons}>Learn More</button>
      </div>
    </div>
  );
}
