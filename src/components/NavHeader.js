import React from "react";
import Logo from "../assets/logo.svg";
import Cart from "../assets/cart_icon.svg";
import "./styles.scss";

const NavHeader = ({ numberInCart, toggleCartView }) => {
  return (
    <nav className="header_nav">
      <img className="logo" src={Logo} alt="Macarons text" />
      <ul>
        <li>menu</li>
        <li>beverages</li>
        <li>gifts</li>
        <li>|</li>
        <li>
          <button className="cart_button" onClick={toggleCartView}>
            {numberInCart > 0 && (
              <span className="cart_count">{numberInCart}</span>
            )}
            <img src={Cart} alt="Shopping Cart" className="cart_image" /> cart
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;
