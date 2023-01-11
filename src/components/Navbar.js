/** @format */

import React from "react";
import airbnbLogo from "../images/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--logo" alt="airbnb logo" src={airbnbLogo} />
    </nav>
  );
}

export default Navbar;
