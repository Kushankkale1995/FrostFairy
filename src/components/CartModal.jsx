import React, { useContext } from "react";
import "./CartModal.css";
import { CartContext } from "../context/CartContext";
import emailjs from "@emailjs/browser";

const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, clearCart } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // ✅ EmailJS Function
  const sendEmail = () => {
    emailjs
      .send(
        "service_s2zrh18", // e.g., 'service_123abc'
        "template_51x99rn", // e.g., 'template_xyz456'
        {
          customer_email: "customer@example.com",
          message: `Your order of ₹${total} has been received.`,
        },
        "cRABpCkQo9NxUobZv" // e.g., 'EUIHDfgrSyQ-abc123'
      )
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
      });
  };

  const handleCheckout = () => {
    const options = {
      key: "rzp_test_SOSOKqt99HxV4r",
      amount: total * 100,
      currency: "INR",
      name: "FrostFairy",
      description: "Cake Order Payment",
      image: "/logo/leader.png",

      // ✅ This function is called after payment success
      handler: function (response) {
        alert("Payment Successful! ID: " + response.razorpay_payment_id);

        // ✅ Now send the email
        sendEmail();

        // ✅ Clear cart & close modal
        clearCart();
        onClose();
      },

      prefill: {
        name: "Customer Name",
        email: "email@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#f50057",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>No items added yet 🧁</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <div className="qty-buttons">
                      <i
                        className="fas fa-minus qty-icon"
                        onClick={() => decreaseQty(item.id)}
                      ></i>
                      <span>{item.quantity}</span>
                      <i
                        className="fas fa-plus qty-icon"
                        onClick={() => increaseQty(item.id)}
                      ></i>
                    </div>

                    <p>Subtotal: ₹{item.price * item.quantity}</p>
                  </div>

                  <i
                    className="fas fa-trash remove-icon"
                    onClick={() => removeFromCart(item.id)}
                  ></i>
                </li>
              ))}
            </ul>

            <h3>Total: ₹{total}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>

            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
