import React, { useState, useContext } from "react";
import "./Navbar.css";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <>
      <div className="top-banner">
        Upto Rs. 200 OFF on the First Order.
        <span className="highlight">T&C apply.</span>
      </div>

      <nav className="navbar">
        <div className="logo">FrostFairy</div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={handleCloseMenu}
            >
              {name}
            </NavLink>
          ))}

          <a href="#" className="cart-icon" onClick={onCartClick}>
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
