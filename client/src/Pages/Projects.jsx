import React, { useRef, useState, useEffect } from 'react';
import './Projects.css';
import acbVideo from '../assets/videos/acb.mp4';
import cableTestVideo from '../assets/videos/cable-test.mp4';
import faultSolveVideo from '../assets/videos/fault-solve.mp4';
import loadchecking from '../assets/videos/load-checking.mp4';

const VideoCard = ({ videoSrc, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setShowIcon(true);
      setTimeout(() => setShowIcon(false), 1000); // hide icon after 1 sec
    } else {
      video.pause();
      setIsPlaying(false);
      setShowIcon(true);
    }
  };

  return (
    <div className="video-card">
      <div className="video-wrapper" onClick={togglePlay}>
        <video
          ref={videoRef}
          muted
          playsInline
          controlsList="nodownload"
          disablePictureInPicture
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {showIcon && (
          <div className="custom-icon">
            {isPlaying ? (
              <svg width="30" height="30" viewBox="0 0 24 24" fill="black">
                <rect x="5" y="4" width="4" height="16" rx="1" />
                <rect x="15" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="30" height="30" viewBox="0 0 24 24" fill="black">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </div>
        )}
      </div>
      <p>{title}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Project Videos</h2>
      <p className="projects-subtitle">Real-time electrical works and testing procedures</p>
      <div className="project-videos">
        <VideoCard videoSrc={acbVideo} title="ACB Panel Connection" />
        <VideoCard videoSrc={cableTestVideo} title="Cable Testing" />
        <VideoCard videoSrc={faultSolveVideo} title="Electrical Auto change over" />
        <VideoCard videoSrc={loadchecking} title="Electrical motors fiddar panel works. Load checking after reinstalling" />
      </div>
    </section>
  );
};

export default Projects;
