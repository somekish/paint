import React from "react";
import s from "./Menu.module.css";

function Menu(props) {
  let menuItem = props.state.map((e) => <p>{e.title}</p>);
  return <nav className={s.Menu}>{menuItem}</nav>;
}

export default Menu;
