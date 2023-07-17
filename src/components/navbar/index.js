import React, { useState, useEffect } from "react";
import "./style.css";

import { PATHS } from "../../routes";
import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="placeholder">
        <ul className={`links ${show ? "slide" : ""}`}>
          <li>
            <NavLink to={PATHS.HOME} activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={PATHS.ABOUT} activeclassname="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={PATHS.SERVICES} activeclassname="active">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to={PATHS.LATEST_NEWS} activeclassname="active">
              Latest News
            </NavLink>
          </li>
          <li>
            <NavLink to={PATHS.CONTACT_US} activeclassname="active">
              Contact Us
            </NavLink>
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
