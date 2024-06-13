import React from 'react';
import './Hero.css';
import logo from '../assets/f1-goat-logo-3.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>Welcome to F1 Stats</h1>
          <p>Your one-stop source for F1 statistics and information.</p>
        </div>
        <div className="hero-right">
          <img src={logo} alt="F1 GOAT Logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
