// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import BurguerMenu from "../../assets/BurguerMenu.svg";
import cross from "../../assets/cross.svg";
import "./header.css";

const Header = () => {
  const [openBM, setOpenBM] = useState(false);

  window.addEventListener("scroll", () => setOpenBM(false));

  return (
    <>
      <div className="header">
        <div className="leftlinks">
          <Link to="/" className="logo">
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
          <img
            src={BurguerMenu}
            className="burgermenu"
            onClick={() => setOpenBM(!openBM)}
          />
        </div>
      </div>
      {openBM == true ? (
        <div className="burguerLinks">
          <img
            src={cross}
            className="cross"
            onClick={() => setOpenBM(!openBM)}
          />
          <Link to="/" onClick={() => setOpenBM(!openBM)}>
            Home
          </Link>
          <Link to="/Testimonials" onClick={() => setOpenBM(!openBM)}>
            Testimonials
          </Link>
          <Link to="/AboutUs" onClick={() => setOpenBM(!openBM)}>
            About Us
          </Link>
          <HashLink to="/#contactUs" onClick={() => setOpenBM(!openBM)}>
            Contact Us
          </HashLink>
        </div>
      ) : null}
    </>
  );
};

export default Header;
