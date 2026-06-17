import React, { useState } from "react";
import API from "../services/api";
import "./Contact.css";
import contactImage from "../assets/contactImg.webp";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdBusiness, MdEmail, MdAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BsTools } from "react-icons/bs";

const Contact = () => {

  const [formData, setFormData] = useState({
    serviceType: "",
    companyName: "",
    officialEmail: "",
    phoneNumber: "",
    officeAddress: "",
    workingHours: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      await API.post("/contact/submit", formData);

      setPopup(true);

      setTimeout(() => {
        setPopup(false);
      }, 3000);

      setFormData({
        serviceType: "",
        companyName: "",
        officialEmail: "",
        phoneNumber: "",
        officeAddress: "",
        workingHours: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (

    <div className="contact-page">

      {/* SUCCESS POPUP */}
      {popup && (
        <div className="success-popup">
          ✔ Service request submitted successfully
        </div>
      )}

      <h1 className="contact-title">Contact Us</h1>

      <p className="contact-subtitle">
        We would love to hear about your project
      </p>

      {/* CONTACT INFO */}
      <div className="contact-info">

        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h3>Address</h3>
          <p>Rajahmundry, Andhra Pradesh</p>
        </div>

        <div className="info-card">
          <FaPhoneAlt className="info-icon" />
          <h3>Phone</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <h3>Email</h3>
          <p>support@company.com</p>
        </div>

      </div>

      {/* FORM SECTION */}
      <div className="contact-wrapper">

        <div className="contact-image">
          <img src={contactImage} alt="contact" />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="grid">

            {/* ✅ UPDATED SERVICE TYPE INPUT */}
            <div className="input-group">
              <BsTools className="input-icon" />
              <input
                type="text"
                name="serviceType"
                placeholder="Service Type"
                value={formData.serviceType}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <MdBusiness className="input-icon" />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <MdEmail className="input-icon" />
              <input
                type="email"
                name="officialEmail"
                placeholder="Official Email"
                value={formData.officialEmail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FiPhone className="input-icon" />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FaMapMarkerAlt className="input-icon" />
              <input
                type="text"
                name="officeAddress"
                placeholder="Office Address"
                value={formData.officeAddress}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <MdAccessTime className="input-icon" />
              <input
                type="text"
                name="workingHours"
                placeholder="Working Hours"
                value={formData.workingHours}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              className="full"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
          </button>

        </form>

      </div>

      {/* GOOGLE MAP */}
      <div className="map">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=rajahmundry&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>

    </div>

  );
};

export default Contact;