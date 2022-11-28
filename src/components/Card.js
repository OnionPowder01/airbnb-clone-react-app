import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  
  let badgeText = ''
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"    
  } else if (props.location !== "Online"){
    badgeText = props.location
  }
  
  return (
    <div className="card">
      {badgeText !== '' && <div className="card--badge">{badgeText}</div>}
      <img src={props.img} alt="card-post" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">  {props.location} </span>
        <p className="card--title">{props.title}</p>
        <p className="card--price"><span className="bold">From {props.price}$</span> / person</p>
      </div>
    </div>
  );
}