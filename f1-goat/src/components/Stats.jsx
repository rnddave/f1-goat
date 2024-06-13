import React from 'react';
import './Stats.css';
import ChampionDriversTable from './ChampionDriversTable';
import ChampionConstructorsTable from './ChampionConstructorsTable';
import ChampionEnginesTable from './ChampionEnginesTable';
import championDrivers from '../data/championDrivers.json';
import championConstructors from '../data/championConstructors.json';
import championEngines from '../data/championEngines.json';
import driverLogo from '../assets/f1-driver-x.png'; // Import the driver logo
import teamLogo from '../assets/f1-team-x.png'; // Import the team logo
import engineLogo from '../assets/f1-engine-x.png'; // Import the engine logo

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats-container">
        <h2>Top Driver Champions</h2>
        <ChampionDriversTable data={championDrivers} />
        <img src={driverLogo} alt="F1 Driver Logo" className="floating-logo" />
      </div>
      <div className="stats-container">
        <h2>Top Constructor Champions</h2>
        <ChampionConstructorsTable data={championConstructors} />
        <img src={teamLogo} alt="F1 Team Logo" className="floating-logo" />
      </div>
      <div className="stats-container">
        <h2>Top Engine Manufacturers</h2>
        <ChampionEnginesTable data={championEngines} />
        <img src={engineLogo} alt="F1 Engine Logo" className="floating-logo" />
      </div>
    </div>
  );
};

export default Stats;
