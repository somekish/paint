import React from "react";
import s from "./Promo.module.css";

function Promo(props) {
  let promoItem = props.state.map((e) => {
    return (
      <div>
        <img src={e.src} alt={e.alt} />
      </div>
    );
  });
  return <div className={s.Promo}>{promoItem}</div>;
}

export default Promo;
