import React from "react";

import "./Card.css";

const Card = ({ src, title, price, supplier, address }) => {
  return (
    <>
      <div className="card">
        <img src={src} alt="med" className="card__img" draggable="false" />

        <div className="card__title">{title}</div>

        <div className="card__price">
          Rs {price} <span className="card__stripe"> / stripe</span>
        </div>

        <div className="card__seller-info">
          <div className="card__supplier">{supplier}</div>
          <div className="card__address">{address}</div>
        </div>

        <button className="card__button font-inter">
          <span class="material-symbols-outlined card__icon">send</span>
          Contact Supplier
        </button>

        <div className="card__bottom"></div>
      </div>
    </>
  );
};

export default Card;
