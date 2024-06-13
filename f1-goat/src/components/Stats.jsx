import React from 'react';
import './Stats.css';
import ChampionDriversTable from './ChampionDriversTable';
import ChampionConstructorsTable from './ChampionConstructorsTable';
import ChampionEnginesTable from './ChampionEnginesTable';
import championDrivers from '../data/championDrivers.json';
import championConstructors from '../data/championConstructors.json';
import championEngines from '../data/championEngines.json';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-column">
        <h2>Top Driver Champions</h2>
        <ChampionDriversTable data={championDrivers} />
      </div>
      <div className="stats-column">
        <h2>Top Constructor Champions</h2>
        <ChampionConstructorsTable data={championConstructors} />
      </div>
      <div className="stats-column">
        <h2>Top Engine Manufacturers</h2>
        <ChampionEnginesTable data={championEngines} />
      </div>
    </section>
  );
};

export default Stats;
