import "./SpecialityCakes.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import cake0 from "../assets/images/cake0.webp";
import cake1 from "../assets/images/cake1.webp";
import cake2 from "../assets/images/cake2.webp";
import cake3 from "../assets/images/cake3.webp";
import cake4 from "../assets/images/cake4.webp";
import cake5 from "../assets/images/cake5.webp";

const images = [cake0, cake1, cake2, cake3, cake4, cake5];

const SpecialityCakes = () => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (image, index) => {
    addToCart({
      id: index,
      name: `Cake ${index + 1}`,
      image,
      price: Math.floor(Math.random() * 300 + 100), // Random price for demo
      quantity: 1,
    });
  };

  return (
    <section className="gallery" id="gallery" data-aos="zoom-in">
      <h2>Our Cakes</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} alt={`Cake ${i + 1}`} loading="lazy" />
            <h4 className="cake-name">Cake {i + 1}</h4>

            <div className="gallery-buttons">
              <button
                className="addToCart-button"
                onClick={() => handleAdd(img, i)}
              >
                Add to Cart
              </button>
              <button className="orderNow-button">Order Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more-wrapper">
        <a href="/gallery" className="view-more-link">
          View More <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default SpecialityCakes;
