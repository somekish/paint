import React from "react";
import s from "./Nav.module.css";

function Nav(props) {
  let navItem = props.state.map((e) => <p>{e.title}</p>);
  return (
    <div className={s.Nav}>
      <h2>КАТАЛОГ ТОВАРОВ</h2>
      {navItem}
    </div>
  );
}

export default Nav;
