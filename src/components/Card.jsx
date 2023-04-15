import React from "react";

export const Card = (props) => {
  return (
    <div className="card">
      <h3 className="card__title">{props.title}</h3>
      <p className="card__price">{props.price}</p>
      <small>{props.taxes}</small>
      <button className="btn-white">C'est parti !</button>

      <p className="services__item">{props.services}</p>
      <p className="services__item not">{props.not}</p>
    </div>
  );
};

export default Card;
