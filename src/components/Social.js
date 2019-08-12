import React from "react";
import facebook from "../assets/facebook_icon.svg";
import instagram from "../assets/instagram_icon.svg";
import twitter from "../assets/twitter_icon.svg";
import "./styles.scss";

const Social = () => {
  return (
    <ul className="social_ul">
      <li>
        <img src={facebook} alt="facebook" />
      </li>
      <li>
        <img src={instagram} alt="instagram" />
      </li>
      <li>
        <img src={twitter} alt="twitter" />
      </li>
    </ul>
  );
};

export default Social;
