// src/pages/ContactUs.jsx
import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="intro-text">
        We'd love to hear from you! Whether it's a custom cake request or a
        simple query, drop us a message below.
      </p>

      <div className="contact-wrapper">
        <form className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h4>Get in Touch</h4>
          <p>
            <i className="fas fa-phone"></i> +91 7972977221
          </p>
          <p>
            <i className="fas fa-envelope"></i> support@frostfairy.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Pune, Maharashtra, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
