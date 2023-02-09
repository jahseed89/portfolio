import React from "react";
import "./offerCard.scss"

export const OfferCard = ({num, title, desc}) => {
  return (
    <div className="offerCard-container">
      <h1 className="numb">
        <span>{num}</span>
      </h1>
      <div className="card-desc">
        <h3>{title}</h3>
        <p>
          {desc}
        </p>
      </div>
    </div>
  );
};
