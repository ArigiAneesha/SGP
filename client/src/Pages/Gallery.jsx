import React from 'react'

import panel1 from '../assets/panel1.jpg';
import panel2 from '../assets/panel2.jpg';
import switchgear1 from '../assets/switchgear1.jpg';
import controlPanel from '../assets/control-panel.jpg';
import './Gallery.css';

const Gallery = () => {
  const items = [
    {
      img: panel1,
      title: 'Circuit Breaker Panel (ACB)',
      desc: 'This panel includes an Air Circuit Breaker used for protection and switching in low-voltage systems.',
    },
    {
      img: panel2,
      title: 'Control & Protection Panel (HPSU)',
      desc: 'Panel with labeled control buttons like ON/OFF, Trip, Test, and Service for safe operation of equipment.',
    },
    {
      img: switchgear1,
      title: 'Vacuum Circuit Breakers',
      desc: 'Row of switchgear panels used in power distribution systems for controlling and protecting electrical circuits.',
    },
    {
      img: controlPanel,
      title: 'Relay & Control Panels (Back View)',
      desc: 'Backside view of relay and control panels showing detailed internal wiring and connections.',
    },
  ];

  return (
    <div className="gallery" id="gallery">
      <h2>Our Work Gallery</h2>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
