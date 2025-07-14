import { useState, useEffect } from "react";
import "./AboutUs.css";
import person1 from "../assets/images/person1.webp";
import person2 from "../assets/images/person2.webp";
import person3 from "../assets/images/person3.webp";
import bgImg from "../assets/images/bg-img.webp";
import baker1 from "../assets/images/baker1.webp";
import baker2 from "../assets/images/baker2.webp";
import baker3 from "../assets/images/baker4.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const bakerImages = [baker1, baker2, baker3];

const teamMembers = [
  {
    name: "Ayush Patil",
    role: "Head Pastry Chef",
    years: "10+ years",
    expertise: "Specializes in French pastries and fondant work",
    image: person1,
  },
  {
    name: "Rohan Deshmukh",
    role: "Cake Designer",
    years: "7 years",
    expertise: "Expert in wedding and themed cake designs",
    image: person2,
  },
  {
    name: "Mohit Sharma",
    role: "Operations Manager",
    years: "5 years",
    expertise: "Manages supply chain and customer satisfaction",
    image: person3,
  },
];

const AboutUs = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? bakerImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === bakerImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const openLocationPopup = () => {
    const win = window.open("/location-popup", "_blank");
    win.focus();
  };

  return (
    <div className="about-container">
      {/* Intro Section */}
      <div className="about-content">
        <div className="about-text">
          <h2>About FrostFairy</h2>
          <p>
            At <strong>FrostFairy</strong>, we believe every moment deserves a
            sweet celebration. Our journey began with a passion for baking and a
            dream to bring the magic of homemade cakes to every home.
          </p>
          <p>
            From birthdays to weddings, we use only the finest ingredients to
            craft cakes that not only look beautiful but taste unforgettable.
          </p>
        </div>
        <div className="about-image">
          <img src={bgImg} alt="About FrostFairy" />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel-section">
        <h3>Meet Our Cake Artists</h3>
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={prevSlide}>
            &#10094;
          </button>

          <img
            src={bakerImages[current]}
            alt={`Baker ${current + 1}`}
            className="carousel-img"
          />

          <button className="carousel-btn right" onClick={nextSlide}>
            &#10095;
          </button>
          {/* 🔘 Dots */}
          <div className="carousel-dots">
            {bakerImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Our Promises */}
      <section className="promises-section">
        <h2 className="promises-heading">Our Promises</h2>
        <div className="promises-grid">
          <div className="promise-card" data-aos="fade-up" data-aos-delay="0">
            <span role="img" aria-label="Cake" className="promise-icon">
              🎂
            </span>
            <h4>Freshly Baked</h4>
            <p>
              Every cake is baked on order to ensure 100% freshness and taste.
            </p>
          </div>
          <div className="promise-card" data-aos="fade-up" data-aos-delay="150">
            <span role="img" aria-label="Delivery" className="promise-icon">
              🚚
            </span>
            <h4>Timely Delivery</h4>
            <p>
              Safe and punctual delivery at your doorstep with elegant
              packaging.
            </p>
          </div>
          <div className="promise-card" data-aos="fade-up" data-aos-delay="300">
            <span role="img" aria-label="Heart" className="promise-icon">
              💖
            </span>
            <h4>Personalized Touch</h4>
            <p>
              Customized cakes designed with love, just the way you imagine it.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="team-section">
        <h3>Meet Our Team</h3>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index} data-aos="zoom-in">
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p className="role">{member.role}</p>
              <p className="experience">{member.years} of experience</p>
              <p className="expertise">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section" data-aos="fade-up">
        <div className="cta-overlay" data-aos="zoom-in">
          <h3 data-aos="fade-up" data-aos-delay="100">
            🍰 Love Our Cakes?
          </h3>
          <p className="cta-subtext" data-aos="fade-up" data-aos-delay="200">
            Taste happiness in every bite – crafted with passion by FrostFairy
          </p>
          <div className="cta-features" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-item">
              <i className="fas fa-star"></i>
              <span>Premium Ingredients</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-shipping-fast"></i>
              <span>Fast & Safe Delivery</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-magic"></i>
              <span>Custom Cake Designs</span>
            </div>
          </div>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="400"
            onClick={openLocationPopup}
          >
            Order Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
