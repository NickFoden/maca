import React, { Fragment, useState} from "react";
import { Link } from "react-router-dom";
import Social from "../components/Social";
import chevron from "../assets/arrow.svg"
import "./styles.scss";

const Footer = props => {

  const [orderVisible, toggleOrderVisible] = useState(false);
  const [companyVisible, toggleCompanyVisible] = useState(false);

  const toggleOrderAccordion = () => {
    toggleOrderVisible(!orderVisible,);
  };
  const toggleCompanyAccordion = () => {
    toggleCompanyVisible(!companyVisible);
  };
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

      <nav className="footer_nav_child_div_mobile">
        <button onClick={toggleCompanyAccordion}><h3>Company</h3> {companyVisible ? <img className="chevron_arrow" src={chevron} alt="arrow up" /> : <img className="chevron_arrow"  src={chevron} alt="arrow down" style={{transform:'rotate(180deg)'}}/>}</button>
        {companyVisible && 
        <Fragment>
        <Link to="/about">About</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/contact">Contact Us</Link>
        </Fragment>}
      </nav>
      <nav className="footer_nav_child_div_mobile">
        <button onClick={toggleOrderAccordion}><h3>Order</h3> {orderVisible ? <img className="chevron_arrow" src={chevron} alt="arrow up"/> : <img className="chevron_arrow" src={chevron} alt="arrow down" style={{transform:'rotate(180deg)'}}/>}</button>
        {orderVisible && 
        <Fragment>
        <Link to="/tracker">Order Tracker</Link>
        <Link to="/delivery">Delivery FAQs</Link>
        </Fragment>}
      </nav>
    </footer>
  );
};

export default Footer;
