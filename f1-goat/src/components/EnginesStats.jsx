import React, { useEffect, useState } from 'react';
import { processEngineData } from '../utils/dataUtils';

const EnginesStats = () => {
  const [enginesData, setEnginesData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await processEngineData('/data/engines.csv', '/data/results.csv');
      setEnginesData(data);
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>Top F1 Engine Manufacturers</h2>
      <ul>
        {enginesData.map(engine => (
          <li key={engine.id}>{engine.name} - Points: {engine.totalPoints}, Championships: {engine.championships}, Years: {engine.years}</li>
        ))}
      </ul>
    </div>
  );
};

export default EnginesStats;
