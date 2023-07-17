import React from "react";
import "./style.css";

import PrimaryButton from "../primaryButton";
import IMAGES from "../../mockData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="top-part">
          <p className="ready-started">Ready to get started?</p>
          <PrimaryButton bg={"#fff"} clr="#0F7AD3" />
        </section>
        <div className="middle-part">
          <div className="middle-flex">
            <p>Subscribe to our newsletter</p>
            <div className="footer-input">
              <input
                type="text"
                name="email"
                id="footer-input"
                placeholder="Email address"
              />
              <div className="footer-input-icon">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>About US</li>
              <li>Services</li>
              <li>Latest News</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <div className="contact-widgett">
              <img src={IMAGES.i1} alt="phone" />

              <h5>Address:</h5>
              <p>28 Division St, New York</p>
            </div>
            <div className="contact-widgett">
              <img src={IMAGES.i3} alt="phone" />

              <h5>Email:</h5>
              <p>Startnext@Gmail.Com</p>
            </div>
            <div className="contact-widgett">
              <img src={IMAGES.i2} alt="phone" />

              <h5>Phone:</h5>
              <p>+ (321) 984 75413545</p>
            </div>
          </div>
        </div>
        <div className="lower-part">
          <div className="flex-footer">
            <p>Terms & Conditions</p>
            <p className="footer-hidden">Privacy Policy</p>
          </div>
          <div className="footer-icons">
            <img src={IMAGES.fb} alt="facebook" />
            <img src={IMAGES.is} alt="instagram" />
            <img src={IMAGES.tw} alt="twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
