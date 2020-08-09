import React from "react";
import Card from "./card";
import "./topCardsList.css";

const cardListData = [
  {
    id: 1,
    username: "@nathanf",
    followers: 1987,
    todayFollowers: 12,
    icon: "images/icon-facebook.svg",
  },
  {
    id: 2,
    username: "@nathanf",
    followers: 1044,
    todayFollowers: 99,
    icon: "images/icon-twitter.svg",
  },
  {
    id: 3,
    username: "@realnathanf",
    followers: "11k",
    todayFollowers: 1099,
    icon: "images/icon-instagram.svg",
  },
  {
    id: 4,
    username: "Nathan F",
    followers: 3256,
    todayFollowers: -144,
    icon: "images/icon-youtube.svg",
  },
];

function TopCardsList() {
  return (
    <section className="estadisticas-principales">
      <div className="container-estadisticas">
        {cardListData.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </section>
  );
}
export default TopCardsList;
