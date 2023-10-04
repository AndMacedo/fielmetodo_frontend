// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="leftlinks">
        <Link to="#contactUs" className="logo">
          <img src={logo} alt="logo" className="logoImage" />
        </Link>
        <Link to="/" id="links">
          Home
        </Link>
        <Link to="/Testimonials" id="links">
          Testimonials
        </Link>
        <Link to="/AboutUs" id="links">
          About Us
        </Link>
      </div>
      <div className="rightLinks">
        <HashLink to="/#contactUs" className="contactus">
          CONTACT US
        </HashLink>
      </div>
    </div>
  );
};

export default Header;
