import React from "react";
import { Link } from "react-router-dom";
import Social from "../components/Social";
import "./styles.scss";

const Footer = props => {
  return (
    <footer className="footer_container">
      <div className="footer_left_container">
        <h3>
          We are commited to serving, the freshest, most delightful treats.
        </h3>
        <Social />
        <h5>© {new Date().getFullYear()} Macarons</h5>
      </div>
      <nav className="footer_nav_child_div">
        <h3>Company</h3>
        <Link to="/about">About</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <nav className="footer_nav_child_div">
        <h3>Order</h3>
        <Link to="/tracker">Order Tracker</Link>
        <Link to="/delivery">Delivery FAQs</Link>
      </nav>
    </footer>
  );
};

export default Footer;
