import React from "react";
import Benefits from "./Benefits/Benefits";
import Contacts from "./Contacts/Contacts";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";

function Header(props) {
  return (
    <header className={s.Header}>
      <Logo state={props.state.logo} />
      <Benefits state={props.state.benefits} />
      <Contacts state={props.state.contacts} />
    </header>
  );
}

export default Header;
