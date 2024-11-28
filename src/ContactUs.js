import React from "react";
import "./ContactUs.css";
import bakeryMapImage from "./assets/bakeryMapImage.png"; // Replace with your map image
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We’ll get back to you shortly.");
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Whether it’s a question, feedback, or just to say hello, feel free to reach out.</p>
      
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone (Optional)</label>
              <input type="tel" id="phone" placeholder="Your Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

        {/* Bakery Info */}
        <div className="bakery-info">
          <h2>Les Délices de Paris</h2>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>123 French Lane, Paris, TX 75460</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>(123) 456-7890</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>hello@LesDélicesdeParis.com</p>
          </div>
          <div className="info-item">
            <FaClock className="icon" />
            <p>
              Mon-Fri: 7:00 AM - 7:00 PM<br />
              Sat-Sun: 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>Visit Us</h2>
        <div className="map-images">
          {/* Clickable Bakery Image */}
          <a 
            href="https://maps.app.goo.gl/ent2NZASLzdaERv26" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={bakeryMapImage} 
              alt="Our Bakery" 
              className="map-image" 
            />
          </a>
      </div>
    </div>
    </div>
    
  );
};

export default ContactUs;

