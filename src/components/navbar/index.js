import React, { useState } from "react";
import "./style.css";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="placeholder">
        <ul className={`links ${show ? "slide" : ""}`}>
          <li>
            <a href="../home/index.html">Home</a>
          </li>
          <li>
            <a href="../About/about.html">About</a>
          </li>
          <li>
            <a href="../services/services.html">Services</a>
          </li>
          <li>
            <a href="../latestnews/latest.html">Latest News</a>
          </li>
          <li>
            <a href="../contactus/contact.html">Contact Us</a>
          </li>
        </ul>

        <button className="nav-button">Support</button>
      </div>
      <div className="actions">
        <i className="fa-solid fa-bars menu" onClick={() => setShow(!show)}></i>
      </div>
    </nav>
  );
};

export default Navbar;
