import React, { useEffect, useState } from 'react';
import { getTopNDrivers } from '../utils/generateVotes';
import BarChart from './BarChart';
import './OverallResults.css';

const OverallResults = ({ votes }) => {
  const [topGoat, setTopGoat] = useState([]);
  const [topToad, setTopToad] = useState([]);

  useEffect(() => {
    if (votes.goat && votes.toad) {
      setTopGoat(getTopNDrivers(votes, 'goat'));
      setTopToad(getTopNDrivers(votes, 'toad'));
    }
  }, [votes]);

  const overallGoat = topGoat.length > 0 ? topGoat[0].name : '';
  const overallToad = topToad.length > 0 ? topToad[0].name : '';

  return (
    <div className="overall-results">
      <div className="result-column">
        <div className="result">
          <h2>Overall GOAT 🐐</h2>
          <span role="img" aria-label="goat">🐐</span> {overallGoat}
        </div>
        <div className="result">
          <BarChart data={topGoat} title="Top 5 GOAT Votes" />
        </div>
      </div>
      <div className="result-column">
        <div className="result">
          <h2>Overall TOAD 🐸</h2>
          <span role="img" aria-label="frog">🐸</span> {overallToad}
        </div>
        <div className="result">
          <BarChart data={topToad} title="Top 5 TOAD Votes" />
        </div>
      </div>
    </div>
  );
};

export default OverallResults;
