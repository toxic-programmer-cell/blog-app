import React from "react";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div>
      <div>
        <div>
          <p>New AI feature integrated</p>
          <img src={assets.star_icon} alt="" />
        </div>
      </div>
      <img src={assets.gradientBackground} alt="background" />
    </div>
  );
}

export default Header;
