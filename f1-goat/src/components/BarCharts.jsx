import React from 'react';
import './BarChartSection.css'; // We'll add some basic CSS later

const BarChartSection = () => {
  return (
    <section className="bar-chart-section">
      <div className="bar-chart-column">
        <video controls>
          <source src="/src/assets/driver-champions.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bar-chart-column">
        <video controls>
          <source src="/src/assets/team-champions.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bar-chart-column">
        <video controls>
          <source src="/src/assets/engine-champions.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default BarChartSection;
