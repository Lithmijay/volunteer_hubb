import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Contact VolunteerHub</h1>
          <p>
            We're here to help you connect with meaningful volunteer opportunities. 
            Reach out to us and let's make a difference together!
          </p>
          <div className="flowers">🌸 🌷 🌺 🌻</div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email Us</h3>
            <p>hello@volunteerhub.org</p>
            <p>support@volunteerhub.org</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567</p>
            <p>Mon-Fri: 9AM-6PM EST</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Visit Us</h3>
            <p>123 Community Street</p>
            <p>Hope City, HC 12345</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>Live Chat</h3>
            <p>Available 24/7</p>
            <p>Quick responses guaranteed</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          
          {isSubmitted && (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <p>Thank you for your message! We'll get back to you within 24 hours.</p>
            </div>
          )}

          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select 
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Select a category</option>
                  <option value="volunteer">Volunteer Inquiry</option>
                  <option value="organization">Organization Partnership</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message"
                name="message"
                placeholder="Tell us how we can help you..."
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn" onClick={handleSubmit}>
                <span>Send Message</span>
                <div className="btn-icon">📤</div>
              </button>
              <p className="form-note">
                We typically respond within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I sign up as a volunteer?</h4>
              <p>Simply visit our registration page, fill out your profile, and browse available opportunities in your area.</p>
            </div>
            <div className="faq-item">
              <h4>Can my organization partner with VolunteerHub?</h4>
              <p>Absolutely! We welcome nonprofit organizations. Contact us to learn about our partnership program.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a fee to use VolunteerHub?</h4>
              <p>VolunteerHub is completely free for volunteers. Organizations have access to both free and premium features.</p>
            </div>
            <div className="faq-item">
              <h4>How do I track my volunteer hours?</h4>
              <p>Our platform automatically tracks your volunteer hours and provides downloadable reports for your records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Connect */}
      <section className="social-section">
        <div className="social-container">
          <h2>Connect With Us</h2>
          <p>Follow us on social media to stay updated on volunteer opportunities and community impact stories.</p>
          <div className="social-links">
            <a href="#" className="social-link facebook">📘 Facebook</a>
            <a href="#" className="social-link twitter">🐦 Twitter</a>
            <a href="#" className="social-link instagram">📷 Instagram</a>
            <a href="#" className="social-link linkedin">💼 LinkedIn</a>
          </div>
        </div>
      </section>

    

    </div>
  );
};

export default ContactUs;