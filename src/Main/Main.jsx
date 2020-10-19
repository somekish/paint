import React from "react";
import Content from "./Content/Content";
import s from "./Main.module.css";
import Nav from "./Nav/Nav";

function Main(props) {
  return (
    <div className={s.Main}>
      <Nav state={props.state.nav} />
      <Content state={props.state.content} dispatch={props.dispatch} />
    </div>
  );
}

export default Main;
