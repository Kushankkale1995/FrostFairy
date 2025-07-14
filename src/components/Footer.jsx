import React from "react";
import "./Footer.css";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section brand">
          <h3>FrostFairy</h3>
          <p>Cake of every occasion</p>
          <div className="social-icons">
            <NavLink to="#">
              <i className="fab fa-facebook-f"></i>
            </NavLink>
            <NavLink to="#">
              <i className="fab fa-instagram"></i>
            </NavLink>
            <NavLink to="#">
              <i className="fab fa-pinterest-p"></i>
            </NavLink>
          </div>
        </div>
        <div className="footer-section explore">
          <h4>Explore</h4>
          <ul>
            <li>
              <NavLink to="/about">Our Story</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Our Products</NavLink>
            </li>
            <li>
              <NavLink to="/speciality">Speciality Cakes</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/csr">CSR</NavLink>
            </li>
            <li>
              <NavLink to="/html-sitemap">HTML Sitemap</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallary">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>📍 Pune, Maharashtra</p>
          <p>📞 +91 7972977221</p>
          <p>✉️ kushankkale1@gmail.com</p>
        </div>

        <div className="footer-section newsletter">
          <h4>Subscribe</h4>
          <p>Get the latest updates and offers.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              emailjs
                .sendForm(
                  "service_s2zrh18", // ✅ your service ID
                  "template_51x99rn", // ✅ your template ID
                  e.target, // ✅ the form itself
                  {
                    publicKey: "cRABpCkQo9NxUobZv", // ✅ your PUBLIC KEY
                  }
                )
                .then(() => alert("Subscribed!"))
                .catch((err) => console.error("EmailJS error:", err));
            }}
          >
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
            />
            <br />
            <br />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} FrostFairy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
