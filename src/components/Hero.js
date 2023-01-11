/** @format */

import React from "react";
import imageGrid from "../images/image-gallery.png";

function Hero() {
  return (
    <section className="hero--container">
      <img className="hero--image" src={imageGrid} alt="" />
      <div className="hero--text_container">
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
