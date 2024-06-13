import React from 'react';
import './Stats.css';

const Stats = () => {
  const driverChampions = [
    // { name, years, flag, wikipediaLink }
  ];

  const teamChampions = [
    // { name, years, wikipediaLink }
  ];

  const engineChampions = [
    // { name, years }
  ];

  return (
    <section className="stats">
      <div className="stats-column">
        <h2>Top 20 Driver Champions</h2>
        <ul>
          {driverChampions.map((driver, index) => (
            <li key={index}>
              <img src={driver.flag} alt={`${driver.name}'s flag`} />
              <a href={driver.wikipediaLink} target="_blank" rel="noopener noreferrer">
                {driver.name}
              </a>
              <span>{driver.years.join(', ')}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="stats-column">
        <h2>Top 20 Team Champions</h2>
        <ul>
          {teamChampions.map((team, index) => (
            <li key={index}>
              <a href={team.wikipediaLink} target="_blank" rel="noopener noreferrer">
                {team.name}
              </a>
              <span>{team.years.join(', ')}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="stats-column">
        <h2>Top 20 Engine Manufacturers</h2>
        <ul>
          {engineChampions.map((engine, index) => (
            <li key={index}>
              {engine.name}
              <span>{engine.years.join(', ')}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
