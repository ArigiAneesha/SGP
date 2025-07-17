import React, { useState, useEffect } from 'react';
import './Contact.css';
import contactImg from '../assets/contactImg.webp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 200); // animation trigger
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`contact-section ${showContent ? 'fade-in' : ''}`}>
      <div className="contact-container">
        {/* Left: Form + Info */}
        <div className="contact-left">
          <h2 className="section-title">Contact Us</h2>
          <p className="subtitle">We'd love to hear from you!</p>

          <div className="contact-info">
            <p><strong>Company:</strong> Sri Gowri Parameswara Electrical & Engineering Works</p><br></br>
            <p><strong>Phone:</strong> +91 6303342931, 7730022384</p><br></br>
            <p><strong>Email:</strong> srigowriparameswaraelectrical@gmail.com</p><br></br>
            <p><strong>Address:</strong> B, Plot No:49 & 50, Room No. 403, 4th Floor, Sai Balaji Cubicle, Kondapur, Telangana 500084</p><br></br>
            <p><strong>Hours:</strong> Mon - Sat, 9:00 AM – 6:00 PM</p>
          </div>

          {/* <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <label>Your Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label>Your Email</label>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit">Send Message</button>
          </form> */}
        </div>

        {/* Right: Image */}
        <div className="contact-right">
          <img src={contactImg} alt="Contact" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
