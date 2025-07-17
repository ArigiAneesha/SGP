import React from 'react';
import './ElectricalSkyline.css';

const ElectricalSkyline = () => {
  return (
    <div className="skyline-wrapper">
      {/* SKY BACKGROUND */}
      <div className="sky-background">
        <div className="sun"></div>
        <div className="moon"></div>
        <div className="stars">
          {Array.from({ length: 20 }).map((_, i) => {
            const top = Math.random() * 25;
            const left = Math.random() * 100;
            return (
              <div
                key={i}
                className="star"
                style={{ top: `${top}%`, left: `${left}%` }}
              />
            );
          })}
        </div>
      </div>

      {/* SKYLINE */}
      <div className="electrical-skyline">
        <div className="power-tower">
          <div className="pole"></div>
          <div className="line top"></div>
          <div className="line middle"></div>
          <div className="line bottom"></div>
          <div className="light"></div>
        </div>

        <div className="building tall blue">
          {Array.from({ length: 16 }).map((_, i) => <div key={i} className="window" />)}
        </div>
        <div className="building short green">
          {Array.from({ length: 8 }).map((_, i) => <div key={i} className="window" />)}
        </div>
        <div className="building medium red">
          {Array.from({ length: 12 }).map((_, i) => <div key={i} className="window" />)}
        </div>
        <div className="building tall orange">
          {Array.from({ length: 14 }).map((_, i) => <div key={i} className="window" />)}
        </div>
      </div>
    </div>
  );
};

export default ElectricalSkyline;
