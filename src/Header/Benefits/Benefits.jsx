import React from "react";
import s from "./Benefits.module.css";

function Benefits(props) {
  let benefitsItem = props.state.map((e) => {
    return (
      <div>
        <img src={e.src} alt={e.alt} />
        <p>{e.title}</p>
      </div>
    );
  });
  return <div className={s.Benefits}>{benefitsItem}</div>;
}

export default Benefits;
