// src/components/Preloader.jsx
import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2500); // Show loader for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hide ? 'hide' : ''}`}>
      <div className="loader">
        <div className="spark-circle">
          <svg className="bolt-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 24 24" fill="yellow">
  <path d="M13 2L3 14h7v8l10-12h-7z" />
</svg>

        </div>
      </div>
    </div>
  );
};

export default Preloader;
