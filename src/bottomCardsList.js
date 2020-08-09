import React from "react";
import CardMini from "./cardMini";
import "./bottomCardsList.css";

const cardMiniData = [
  {
    id: 1,
    title: "Pages Views",
    icon: "images/icon-facebook.svg",
    number: 87,
    porcentajes: 3,
  },
  {
    id: 2,
    title: "Likes",
    icon: "images/icon-facebook.svg",
    number: 52,
    porcentajes: -2,
  },
  {
    id: 3,
    title: "Likes",
    icon: "images/icon-instagram.svg",
    number: 5462,
    porcentajes: 2257,
  },
  {
    id: 4,
    title: "Profile Views",
    icon: "images/icon-instagram.svg",
    number: 87,
    porcentajes: 1375,
  },
  {
    id: 5,
    title: "Retweets",
    icon: "images/icon-twitter.svg",
    number: 117,
    porcentajes: 303,
  },
  {
    id: 6,
    title: "Likes",
    icon: "images/icon-twitter.svg",
    number: 507,
    porcentajes: 553,
  },
  {
    id: 7,
    title: "Likes",
    icon: "images/icon-youtube.svg",
    number: 107,
    porcentajes: -19,
  },
  {
    id: 8,
    title: "Total Views",
    icon: "images/icon-youtube.svg",
    number: 1407,
    porcentajes: -12,
  },
];

function BottomCardsList() {
  return (
    <section className="container-estadisticas-secundarias">
      <div className="container-overview">
        <h2 className="overview">Overview - Today</h2>
      </div>
      <div className="container-estadisticas">
        {cardMiniData.map((cardMiniData) => (
          <CardMini key={cardMiniData.id} {...cardMiniData} />
        ))}
      </div>
      <script src="app.js"></script>
    </section>
  );
}
export default BottomCardsList;
