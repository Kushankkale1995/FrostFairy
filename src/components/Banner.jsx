import React from "react";
import "./Banner.css";

const Banner = () => {
  const openLocationPopup = () => {
    const win = window.open("/location-popup", "_blank");
    win.focus();
  };
  return (
    <section className="banner" id="home">
      <div className="banner-content">
        <h1>Welcome to FrostFairy</h1>
        <p>Cake of every occasion</p>
        <button className="order-button" onClick={openLocationPopup}>
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
