import React from "react";
import katie from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={katie} alt="katie" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span>5.0 </span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
        <p className="card--para">Life lessons with Katie Zaferes</p>
        <p className="card--para"><span className="bold">From $136</span> / person</p>
      </div>
    </div>
  );
}
<span className="bold">From $136</span>