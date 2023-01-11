/** @format */

import React from "react";
import starIcon from "../images/Star.png";

function Card(props) {
  console.log(props);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div className="card--photo_details">
        {badgeText && <h3 className="card--availability">{badgeText}</h3>}
        {/* <h3 className="card--availability">SOLD OUT</h3> */}
        <img
          alt="olympic swimmer"
          src={require(`../images/${props.item.coverImg}`)}
          className="card--image"
        />
      </div>
      <div className="card--details">
        <div className="card--stats">
          <img alt="" src={starIcon} className="card--star" />
          <span>{props.item.stats.rating}</span>
          <span className="text--gray">
            ({props.item.stats.reviewCount}) ●{" "}
          </span>
          <span className="text--gray">{props.item.location}</span>
        </div>
        <p className="card--title">{props.item.title}</p>
        <p className="card--cost_person">
          <span className="text--bold">From ${props.item.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
