import React from "react";
import s from "./Companies.module.css";

function Companies(props) {
  let companiesItem = props.state.map((e) => {
    return (
      <div>
        <div className="imgBlock">
          <img src={e.src} alt={e.alt} />
        </div>
        <p>{e.title}</p>
      </div>
    );
  });
  return <div className={s.Companies}>{companiesItem}</div>;
}

export default Companies;
