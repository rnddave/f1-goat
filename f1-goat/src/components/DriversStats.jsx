import React, { useEffect, useState } from 'react';
import { processDriverData } from '../utils/dataUtils';

const DriversStats = () => {
  const [driversData, setDriversData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await processDriverData('/data/drivers.csv', '/data/results.csv');
      setDriversData(data);
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>Top F1 Drivers</h2>
      <ul>
        {driversData.map(driver => (
          <li key={driver.id}>{driver.name} - Points: {driver.totalPoints}, Championships: {driver.championships}, Years: {driver.years}</li>
        ))}
      </ul>
    </div>
  );
};

export default DriversStats;
