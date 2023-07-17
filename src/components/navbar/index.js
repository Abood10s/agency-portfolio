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
            <NavLink
              to={PATHS.HOME}
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "",
                background: isActive ? "#0F7AD3" : "",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={PATHS.ABOUT}
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "",
                background: isActive ? "#0F7AD3" : "",
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={PATHS.SERVICES}
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "",
                background: isActive ? "#0F7AD3" : "",
              })}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={PATHS.LATEST_NEWS}
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "",
                background: isActive ? "#0F7AD3" : "",
              })}
            >
              Latest News
            </NavLink>
          </li>
          <li>
            <NavLink
              to={PATHS.CONTACT_US}
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "",
                background: isActive ? "#0F7AD3" : "",
              })}
            >
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
