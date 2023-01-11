/** @format */

import React from "react";
import imageGrid from "../images/image-gallery.png";

function Hero() {
  return (
    <div className="hero--container">
      <img className="hero--image" src={imageGrid} alt="" />
      <div className="hero--text">
        <h1>Online Experiences</h1>
        <h3>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h3>
      </div>
    </div>
  );
}

export default Hero;
