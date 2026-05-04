import React, { useState } from 'react';
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h5 className="contact-label">Email</h5>
              <a href="mailto:somumahesh8886@gmail.com" className="contact-value">

              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <h5 className="contact-label">LinkedIn</h5>
              <a href="https://www.linkedin.com/in/mahesh-somu-533044315/" target="_blank" rel="noopener noreferrer" className="contact-value">

              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <h5 className="contact-label">GitHub</h5>
              <a href="https://github.com/MaheshSomu" target="_blank" rel="noopener noreferrer" className="contact-value">

              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
