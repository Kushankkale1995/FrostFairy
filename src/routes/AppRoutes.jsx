// src/Routes.jsx
import React, { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartModal from "../components/CartModal";
import "../App.css";
import ScrollToTop from "../pages/ScrollToTop";
import ContactUs from "../pages/ContactUs";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Gallery = lazy(() => import("../components/Gallery"));
const OrderForm = lazy(() => import("../components/OrderForm"));
const LocationPopup = lazy(() => import("../components/LocationPopup"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const openLocationPopup = () => {
    const win = window.open(
      "/location-popup",
      "_blank",
      "width=500,height=600"
    );
    if (win) win.focus();
  };

  return (
    <>
      <ScrollToTop />
      <Navbar onCartClick={() => setCartOpen(true)} />
      {cartOpen && <CartModal onClose={() => setCartOpen(false)} />}

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/location-popup" element={<LocationPopup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />

      <div className="bottom-order-banner">
        <button className="order-now-btn" onClick={openLocationPopup}>
          Order Now
        </button>
      </div>
    </>
  );
};

export default AppRoutes;
