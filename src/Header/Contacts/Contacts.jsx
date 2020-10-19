import React from "react";
import s from "./Contacts.module.css";

function Contacts(props) {
  return (
    <div className={s.Contacts}>
      <img src={props.state.src} alt={props.state.alt} />
      <p>{props.state.phone}</p>
      <p>{props.state.email}</p>
    </div>
  );
}

export default Contacts;
