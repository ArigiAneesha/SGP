import React from "react";
import "./Home.css";
import panel1 from "../assets/home4.webp";
import logo from "../assets/logo2.webp";

import Services from "./Services";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Projects from "./Projects";
import Help from "./Help";

const Home = () => {
  return (
    <>
      <section className="home" id="about">

        <div className="home-container">

          {/* LEFT SIDE */}
          <div className="hero-text">

            <img src={logo} alt="Company Logo" className="logo" />

            <h1>
              <span className="company-name">SRI GOWRI PARAMESWARA</span> <br />
              Electrical & Engineering Works
            </h1>

            <p>
              Delivering reliable electrical engineering solutions with
              safety, quality, and innovation for modern industries.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn-primary">Our Services</a>
              <a href="#contact" className="btn-secondary">Get a Quote</a>
            </div>

            <div className="hero-stats">

              <div>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div>
                <h3>150+</h3>
                <p>Projects</p>
              </div>

              <div>
                <h3>50+</h3>
                <p>Clients</p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="hero-image">
            <img src={panel1} alt="Engineering illustration"/>
          </div>

        </div>

      </section>

      {/* <div id="services"><Services /></div> */}
      <div id="gallery"><Gallery /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <div id="help"><Help /></div>
    </>
  );
};

export default Home;