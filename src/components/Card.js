/** @format */

import React from "react";
import starIcon from "../images/Star.png";

function Card(props) {
  return (
    <div className="card--whole">
      <div className="card--photo_details">
        <h3 className="card--availability">{props.status}</h3>
        <img
          alt="olympic swimmer"
          src={require(`../images/${props.img}`)}
          className="card--image"
        />
      </div>
      <div className="card--details">
        <div className="card--stats">
          <img alt="" src={starIcon} className="card--star" />
          <span>{props.rating}</span>
          <span className="text--gray">({props.reviewCount}) ● </span>
          <span className="text--gray">{props.country}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--cost_person">
          <span className="text--bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
