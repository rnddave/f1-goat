import React, { useEffect, useState } from 'react';
import { processTeamData } from '../utils/dataUtils';

const TeamsStats = () => {
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await processTeamData('/data/constructors.csv', '/data/results.csv');
      setTeamsData(data);
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>Top F1 Teams</h2>
      <ul>
        {teamsData.map(team => (
          <li key={team.id}>{team.name} - Points: {team.totalPoints}, Championships: {team.championships}, Years: {team.years}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsStats;
