import React from "react";
import s from "./Footer.module.css";

function Footer(props) {
  let footer = props.state.map((e) => <p>{e.title}</p>);
  return <div className={s.Footer}>{footer}</div>;
}

export default Footer;
