import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Cart from "../assets/cart_icon.svg";
import "./styles.scss";

const NavHeader = ({ numberInCart, toggleCartView }) => {
  return (
    <Fragment>
      <nav className="header_nav">
        <Link to="/">
          <img className="logo" src={Logo} alt="Macarons text" />
        </Link>
        <ul>
          <li>
            <NavLink to="/">menu</NavLink>
          </li>
          <li>
            <NavLink to="/beverages">beverages</NavLink>
          </li>
          <li>
            <NavLink to="/gifts">gifts</NavLink>
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
          <NavLink exact to="/">
            menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/beverages">
            beverages
          </NavLink>
        </li>
        <li>
          <NavLink to="/gifts">
            gifts
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavHeader;
