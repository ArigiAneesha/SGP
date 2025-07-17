import React, { useState } from 'react';
import './Help.css';

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
  {
    question: "How can I request an electrical service?",
    answer: "📩 For inquiries, email us at srigowriparameswaraelectrical@gmail.com 📞 Or reach us by phone: +91 63033 42931 / 77300 22384You can call us at +91 6303342931, 7730022384 or fill out the form on the Contact page."
  },
  {
    question: "What types of services do you offer?",
    answer: (
      <ul className="service-list">
        <li>AC Diffusers</li>
        <li>DB Boards</li>
        <li>ARCCTV Camera</li>
        <li>Electrical Control Panel</li>
        <li>Electrical Panel Installation</li>
        <li>Electrical Panel Testing Installation</li>
        <li>Electrical Commissioning</li>
        <li>Plumbing</li>
        <li>Water Heater</li>
      </ul>
    )
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we offer urgent support during working hours. For emergencies, please call us directly."
  },
  {
    question: "Where are you located?",
    answer: "We are located in B, plot no:49 & 50, Room no. 403, 4th floor, Sai Balaji Cubicle, above Green Trends Saloon, Raghavendra Colony, Kondapur, Telangana 500084 and serve nearby areas."
  }
];


  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="help" className="help-section">
      <h2>Help & FAQs</h2>
      <p className="intro-text">Have questions? We're here to help you!</p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>

      <p className="chat-hint">Need instant help? Click the blue chat icon in the corner to chat with us!</p>
    </section>
  );
};

export default Help;
