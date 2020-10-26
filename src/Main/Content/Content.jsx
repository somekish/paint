import React from "react";
import Benefits from "./Benefits/Benefits";
import Companies from "./Companies/Companies";
import s from "./Content.module.css";
import Nav from "./Menu/Menu";
import Promo from "./Promo/Promo";
import SearchBoxContainer from "./SearchBox/SearchBoxContainer";

function Content(props) {
  return (
    <div className={s.Content}>
      <Nav state={props.state.menu} />
      <SearchBoxContainer />
      <Promo state={props.state.promo} />
      <hr />
      <Benefits state={props.state.benefits} />
      <hr />
      <Companies state={props.state.companies} />
    </div>
  );
}

export default Content;
