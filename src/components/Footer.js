import React from "react";
import { Link } from "react-router-dom";
import Social from "../components/Social";
import "./styles.scss";

const Footer = props => {
  return (
    <footer>
      <div>
        <h3>
          We are commited to serving, the freshest, most delightful treats.
        </h3>
        <Social />
        <h5>© {new Date().getFullYear()} Macarons</h5>
      </div>
      <nav className="footer_nav">
        <Link to="/">Company</Link>
        <Link to="/">About</Link>
        <Link to="/">locations</Link>
        <Link to="/">contact us</Link>
        <Link to="/">Orders</Link>
        <Link to="/">Order Tracker</Link>
        <Link to="/">Delivery FAQs</Link>
      </nav>
    </footer>
  );
};

export default Footer;
