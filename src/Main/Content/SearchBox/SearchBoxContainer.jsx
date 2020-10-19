import React from "react";
import s from "./SearchBox.module.css";
import { updateSearchActionCreator } from "../../../redux/reducers/mainReducer";
import SearchBox from "./SearchBox";

function SearchBoxContainer(props) {
  let inputRef = React.createRef();
  let updateSearch = () => {
    let text = inputRef.current.value;
    props.dispatch(updateSearchActionCreator(text));
    debugger;
  };
  return <SearchBox />;
}

export default SearchBoxContainer;
