// LocationPopup.jsx
import React, { useState } from "react";
import "./LocationPopup.css";

const LocationPopup = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleUseCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(
            `Lat: ${latitude.toFixed(2)}, Lng: ${longitude.toFixed(2)}`
          );
          setTimeout(() => {
            window.location.href = "/order";
          }, 1000);
        },
        () => {
          setError("Failed to get location. Please allow access.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  const handleOrder = () => {
    if (!location.trim()) {
      setError("Please enter your locality.");
      return;
    }
    window.location.href = "/order";
  };

  return (
    <div className="popup-wrapper">
      <div className="popup-box">
        {step === 1 && (
          <>
            <h3>🧁 Delivery Location</h3>
            <p>Select your preferred delivery option:</p>
            <div className="popup-btns">
              <button onClick={handleUseCurrentLocation}>
                📍 Use My Current Location
              </button>
              <button onClick={() => setStep(2)}>
                🏠 Enter Delivery Location
              </button>
            </div>
            {error && <p className="popup-error">{error}</p>}
          </>
        )}

        {step === 2 && (
          <>
            <h3>🔍 Enter Your Locality</h3>
            <input
              type="text"
              placeholder="Search or enter your area"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleOrder}>Order</button>
            {error && <p className="popup-error">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default LocationPopup;
