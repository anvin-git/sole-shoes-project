import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setMessageSent(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* Contact Information Section */}
      <section className="contact-info">
        <h1 className="text-center mb-5">Contact The Sole Shoes</h1>
        <p className="lead text-center">
          Feel free to get in touch with us via phone, email, or visit our store during business hours.
        </p>
        <ul className="contact-details text-center">
          <li><strong>Phone:</strong> (123) 456-7890</li>
          <li><strong>Email:</strong> info@SoleShoes.com</li>
          <li><strong>Address:</strong> 123 Main Street, City, State, Zip Code</li>
        </ul>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h2 className="text-center">Send Us a Message</h2>
        {messageSent && <p className="text-success text-center">Message sent successfully.</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control mb-3"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn-block">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
