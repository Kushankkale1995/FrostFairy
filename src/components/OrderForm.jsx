import React, { useState } from "react";
import "./OrderForm.css";

const fields = [
  { type: "text", name: "name", placeholder: "Your Name", required: true },
  { type: "email", name: "email", placeholder: "Your Email", required: true },
  {
    type: "text",
    name: "cakeType",
    placeholder: "Cake Type (e.g., Chocolate)",
    required: true,
  },
];

const OrderForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    cakeType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your order, ${form.name}!`);
    // Handle backend logic here
  };

  return (
    <section className="order-form">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit} data-aos="fade-up">
        {fields.map((field) => (
          <input
            key={field.name}
            {...field}
            value={form[field.name]}
            onChange={handleChange}
          />
        ))}
        <textarea
          name="message"
          placeholder="Special instructions"
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit">Submit Order</button>
      </form>
    </section>
  );
};

export default OrderForm;
