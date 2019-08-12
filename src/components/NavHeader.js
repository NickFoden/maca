import React from "react";
import Logo from "../assets/logo.svg";
import Cart from "../assets/cart_icon.svg";
import "./styles.scss";

const NavHeader = () => {
  return (
    <nav className="header_nav">
      <img className="logo" src={Logo} alt="Macarons text" />
      <ul>
        <li>menu</li>
        <li>beverages</li>
        <li>gifts</li>
        <li>|</li>
        <li>
          <img src={Cart} alt="Cart" /> cart
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;