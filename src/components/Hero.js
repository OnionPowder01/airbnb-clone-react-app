import React from "react";
import myImage from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="collage-image">
        <img src={myImage} alt="collage-grid" className="collage-grid" />
      </div>
      <div className="online-experiences">
        <h1 className="h1-hero">Online Experiences</h1>
        <p className="para-hero">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
