import React, { useState } from 'react';

import panel1 from '../assets/panel1.jpg';
import panel2 from '../assets/panel2.jpg';
import switchgear1 from '../assets/switchgear1.jpg';
import controlPanel from '../assets/control-panel.jpg';

import './Gallery.css';

const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    {
      img: panel1,
      title: 'Circuit Breaker Panel (ACB)',
      desc: 'Air Circuit Breaker used for protection and switching in low-voltage systems.',
    },
    {
      img: panel2,
      title: 'Control & Protection Panel',
      desc: 'Control buttons like ON/OFF, Trip, Test and Service for safe equipment operation.',
    },
    {
      img: switchgear1,
      title: 'Vacuum Circuit Breakers',
      desc: 'Switchgear panels used in power distribution systems.',
    },
    {
      img: controlPanel,
      title: 'Relay & Control Panels',
      desc: 'Backside view showing internal wiring and electrical connections.',
    },
  ];

  return (
    <div className="gallery" id="gallery">

      <h2>Our Work Gallery</h2>

      <p className="gallery-description">
        Explore some of the electrical panels, switchgear systems, and control 
        installations completed by our team. Our work focuses on safety, 
        reliability, and high-quality engineering solutions for modern 
        electrical infrastructure.
      </p>

      <div className="gallery-grid">

        {items.map((item, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelectedImage(item.img)}
          >

            <img src={item.img} alt={item.title} />

            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}

      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" />
        </div>
      )}

    </div>
  );
};

export default Gallery;