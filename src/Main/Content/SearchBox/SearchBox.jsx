import React from "react";
import s from "./SearchBox.module.css";
import { updateSearchActionCreator } from "../../../redux/reducers/mainReducer";

function SearchBox(props) {
  let inputRef = React.createRef();
  let updateSearch = () => {
    let text = inputRef.current.value;
    props.dispatch(updateSearchActionCreator(text));
    debugger;
  };
  return (
    <div className={s.SearchBox}>
      <form>
        <input
          ref={inputRef}
          onChange={updateSearch}
          type="search"
          placeholder={props.state.placeholder}
          value={props.state.value}
        />
        <button type="submit">Найти! </button>
      </form>
    </div>
  );
}

export default SearchBox;
