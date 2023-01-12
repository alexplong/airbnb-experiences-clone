/** @format */

import React from "react";
import starIcon from "../images/Star.png";

function Card(props) {
  console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div className="card--photo_details">
        {badgeText && <h3 className="card--availability">{badgeText}</h3>}
        {/* <h3 className="card--availability">SOLD OUT</h3> */}
        <img
          alt="olympic swimmer"
          src={require(`../images/${props.coverImg}`)}
          className="card--image"
        />
      </div>
      <div className="card--details">
        <div className="card--stats">
          <img alt="" src={starIcon} className="card--star" />
          <span>{props.stats.rating}</span>
          <span className="text--gray">({props.stats.reviewCount}) ● </span>
          <span className="text--gray">{props.location}</span>
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
