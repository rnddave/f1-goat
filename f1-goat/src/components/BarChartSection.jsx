import React from 'react';
import './BarChartSection.css';
import driverLogo from '../assets/f1-driver-x.png'; // Import the driver logo
import teamLogo from '../assets/f1-team-x.png'; // Import the team logo
import engineLogo from '../assets/f1-engine-x.png'; // Import the engine logo

const BarChartSection = () => {
  return (
    <section className="bar-chart-section">
      <div className="bar-chart-column">
        <div className="video-container">
          <video controls>
            <source src="/src/assets/f1_driver_championships.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={driverLogo} alt="F1 Driver Logo" className="floating-logo" />
        </div>
      </div>
      <div className="bar-chart-column">
        <div className="video-container">
          <video controls>
            <source src="/src/assets/f1_constructor_championships.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={teamLogo} alt="F1 Team Logo" className="floating-logo" />
        </div>
      </div>
      <div className="bar-chart-column">
        <div className="video-container">
          <video controls>
            <source src="/src/assets/f1_engine_championships.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={engineLogo} alt="F1 Engine Logo" className="floating-logo" />
        </div>
      </div>
    </section>
  );
};

export default BarChartSection;
