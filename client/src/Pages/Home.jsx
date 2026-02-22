import React from 'react';
import './Home.css';

import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import Projects from './Projects';
import Help from './Help';

const Home = () => {
  return (
    <>
      <div className="home" id="about">
        <div className="angled-background" />
        <img src="/logo.jpg" alt="Company Logo" className="logo" />
        <h1>Welcome to <br />SGP Electrical & Engineering Works</h1>
        <p>
          To be a global leader in electrical engineering by fostering sustainable
          and intelligent solutions
        </p>
      </div>

      <div id="services"><Services /></div>
      <div id="gallery"><Gallery /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <div id="help"><Help /></div>
    </>
  );
};

export default Home;