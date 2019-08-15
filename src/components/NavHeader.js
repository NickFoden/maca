import React from "react";
import Logo from "../assets/logo.svg";
import Cart from "../assets/cart_icon.svg";
import "./styles.scss";

const NavHeader = ({ currentCart }) => {
  return (
    <nav className="header_nav">
      <img className="logo" src={Logo} alt="Macarons text" />
      <ul>
        <li>menu</li>
        <li>beverages</li>
        <li>gifts</li>
        <li>|</li>
        <li>
          <button className="cart_button">
            <img src={Cart} alt="Cart" className="cart_image" /> cart
          </button>
        </li>
        <li>{currentCart.items.length}</li>
      </ul>
    </nav>
  );
};

export default NavHeader;
