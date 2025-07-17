import React, { useRef } from 'react';
import './Home.css';

import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import Projects from './Projects';
import Help from './Help';



const Home = () => {

  const servicesRef = useRef(null);
  const ProjectRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <>
      <div className="home">
        {/* Decorative angled shape */}
        <div className="angled-background" />

        <img src="/logo.jpg" alt="Company Logo" className="logo" />
        <h1>Welcome to <br></br>SGP Electrical & Engineering Works</h1>
        <p>To be a global leader in electrical engineering by fostering sustainable and intelligent solutions</p>
      </div>

      
      <div ref={servicesRef}><Services /></div>
      <div ref={galleryRef}><Gallery /></div>
      <div ref={ProjectRef}><Projects /></div>  
      <div ref={contactRef}><Contact /></div>
      <div ref={homeRef}><Help /></div>
      
    </>
  );
};

export default Home;
