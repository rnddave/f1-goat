import React from 'react';
import './Hero.css';
import logo from '../assets/f1-goat-logo-3.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <img src={logo} alt="F1 GOAT Logo" />
        </div>
        <div className="hero-right">
          {/* <h1>Welcome to F1 Stats</h1> */}
          <p>My name is <a href="https://david-dickinson.com" target="_blank" rel="noopener noreferrer">David Dickinson</a> and
          I have followed Formula 1 since being a child, 
          watching it with my Grandad. I built this page to record the basic stats 
            surrounding F1 but with a plan to add some 
            twists a little later, check back soon!</p>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
