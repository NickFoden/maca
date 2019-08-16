import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Cart from "../assets/cart_icon.svg";
import "./styles.scss";

const NavHeader = ({ numberInCart, toggleCartView }) => {
  return (
    <Fragment>
      <nav className="header_nav">
        <img className="logo" src={Logo} alt="Macarons text" />
        <ul>
          <li>
            <NavLink>menu</NavLink>
          </li>
          <li>
            <NavLink>beverages</NavLink>
          </li>
          <li>
            <NavLink>gifts</NavLink>
          </li>
          <li id="pipe_separator">|</li>
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
      <ul className="header_nav_mobile_ul">
        <li>
          <NavLink activeStyle={{ borderColor: "#2fc594" }} to="/">
            menu
          </NavLink>
        </li>
        <li>
          <NavLink>beverages</NavLink>
        </li>
        <li>
          <NavLink>gifts</NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavHeader;
