// src/pages/NotFound.jsx
import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="back-home-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
