import React from 'react';
import './BarChartSection.css';

const BarChartSection = () => {
  return (
    <section className="bar-chart-section">
      <div className="bar-chart-column">
        <video controls>
          <source src="/src/assets/f1_driver_championships.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bar-chart-column">
        <video controls>
          <source src="/src/assets/f1_constructor_championships.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bar-chart-column">
        <video controls>
          <source src="/src/assets/f1_engine_championships.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default BarChartSection;
