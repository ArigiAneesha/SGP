import React from 'react'
import service from '../assets/IMG-20250711-WA0007.jpg';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-content">
        <img src={service} alt="Our Services" className="services-img" />
      </div>
    </section>
  )
}

export default Services
