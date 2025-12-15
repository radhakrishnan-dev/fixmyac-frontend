// src/pages/Contact.tsx
import React, { useState } from 'react';
import './Contact.css'; // We'll create this CSS file next

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Inquiry Submitted:', formData);
    alert('Thank you for your inquiry! We will respond shortly.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  // Replace with your actual details
  const phoneNumber = '+919787207758';
  const emailAddress = 'fixmyaccoimbatore@gmail.com';
  const officeAddress = 'FixMyAc, City, State ';

  return (
    <div className="contact-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1 className="page-title">Get in Touch with FixMyAc</h1>
        <p className="page-subtitle">For urgent bookings, please use the **Call Now** button. For general queries, use the form below.</p>

        <div className="contact-layout">
          {/* Left Side: Contact Form */}
          <div className="contact-form-container">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required />
              </div>
              <button type="submit" className="btn-secondary full-width-btn">Send Message</button>
            </form>
          </div>

          {/* Right Side: Details and Map */}
          <div className="contact-details-container">
            <h3>Our Details</h3>
            <div className="detail-item">
              <h4>📞 Phone Support</h4>
              <p><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
            </div>
            <div className="detail-item">
              <h4>📧 Email Address</h4>
              <p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
            </div>
            <div className="detail-item">
              <h4>📍 Office Location</h4>
              <p>{officeAddress}</p>
            </div>

            {/* Placeholder for Map Integration (Replace with actual Google Maps embed iframe later) */}
            <div className="map-placeholder">
              
              <p>Area Map Placeholder (For visual presence)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;