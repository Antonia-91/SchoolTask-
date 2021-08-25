import React from "react";
import CartIcon from "../svg/shopping-cart-solid.svg";
import "./css/Producter.css";

const Prod = ({ prod, clicking }) => {
  return (
    <div className="card__holder">
      <div className="cards">
        <div className="card">
          <img src={prod.src} width="300" className="card__image" />
          <div className="card__content">
            <h3>{prod.title}</h3>
            <span> Colors: </span>{" "}
            {prod.colors.map((color) => (
              <span> {color} </span>
            ))}
          </div>
          <div className="card__info">
            <div>
              <img
                src={CartIcon}
                alt=""
                width={20}
                onClick={() => clicking(prod.title)}
              />
            </div>

            <div>
              <p> price: {prod.price} $ </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prod;
