import React from "react";
import "./cardMini.css";

function CardMini({ title, icon, number, porcentajes }) {
  return (
    <article className="card-secundarias">
      <div className="container-txt-icon">
        <p>{title}</p>
        <img src={icon} alt="icono de facebook" />
      </div>
      <div className="container-number">
        <p className="number-principal">{number}</p>
        <div className="icon-porcentajes">
          <img
            src={
              porcentajes > 0 ? "images/icon-up.svg" : "images/icon-down.svg"
            }
            alt="flecha arriba"
          />
          <p className={`number-porcentajes ${porcentajes > 0 ? "" : "rojo"}`}>
            {porcentajes}%
          </p>
        </div>
      </div>
    </article>
  );
}
export default CardMini;
