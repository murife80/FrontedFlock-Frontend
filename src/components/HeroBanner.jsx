// src/components/HeroBanner.jsx
import React from 'react';
import './HeroBanner.css';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="overlay" />
      <div className="hero-content">
        <h1 className="hero-title">KRAVEN THE HUNTER</h1>
        <p className="hero-description">
          Estranged from his brutal father, Marvel’s merciless antihero uses his animal-infused instincts to track and eliminate the deadliest criminals.
        </p>
        <div className="hero-buttons">
          <button className="play-btn">▶ Play</button>
          <button className="info-btn">ℹ More Info</button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
