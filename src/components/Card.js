import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="card-post" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">  {props.location} </span>
        <p className="card--para">{props.title}</p>
        <p className="card--para"><span className="bold">From {props.price}$</span> / person</p>
      </div>
    </div>
  );
}