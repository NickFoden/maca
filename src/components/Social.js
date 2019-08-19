import React from "react";
import facebook from "../assets/facebook_icon.svg";
import instagram from "../assets/instagram_icon.svg";
import twitter from "../assets/twitter_icon.svg";
import "./styles.scss";

const Social = () => {
  return (
    <ul className="social_ul">
      <li>
        <a
          href="https://www.facebook.com/hisawyer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/hellosawyer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/sawyer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
