import React from "react";
import s from "./Logo.module.css";

function Logo(props) {
  return (
    <div className={s.Logo}>
      <img src={props.state.src} alt={props.state.alt} />
    </div>
  );
}

export default Logo;
