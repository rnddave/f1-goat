import React from 'react';
import DriversStats from './components/DriversStats';
import TeamsStats from './components/TeamsStats';
import EnginesStats from './components/EnginesStats';
import BarChartRace from './components/BarChartRace';

const App = () => {
  return (
    <div>
      <h1>F1 Statistics</h1>
      <DriversStats />
      <TeamsStats />
      <EnginesStats />
      <BarChartRace />
    </div>
  );
};

export default App;
