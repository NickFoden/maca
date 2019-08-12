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
        <Link>Company</Link>
        <Link>About</Link>
        <Link>locations</Link>
        <Link>contact us</Link>
        <Link>Orders</Link>
        <Link>Order Tracker</Link>
        <Link>Delivery FAQs</Link>
      </nav>
    </footer>
  );
};

export default Footer;
