import React from "react";
import "./card.css";

function Card(props) {
  return (
    <article className="card-principales">
      <div className="container-user1">
        <img
          className="icon-red-social"
          src={props.icon}
          alt="icono de facebook"
        />
        <p className="user">{props.username} </p>
      </div>
      <p className="anio">{props.followers}</p>
      <p className="text-followers">Followers</p>
      <div className="container-today-icon">
        <img
          className="icono-arriba-abajo"
          src={
            props.todayFollowers > 0
              ? "images/icon-up.svg"
              : "images/icon-down.svg"
          }
          alt="icono"
        />
        <p className={`today ${props.todayFollowers > 0 ? "" : "rojo"}`}>
          {props.todayFollowers} Today
        </p>
      </div>
    </article>
  );
}
export default Card;
