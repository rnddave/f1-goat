import React, { useEffect, useState } from 'react';
import { getVotes, getTopNDrivers } from '../utils/generateVotes';
import BarChart from './BarChart';
import './OverallResults.css';

const OverallResults = () => {
  const [votes, setVotes] = useState({});
  const [topGoat, setTopGoat] = useState([]);
  const [topToad, setTopToad] = useState([]);

  useEffect(() => {
    const storedVotes = getVotes();
    setVotes(storedVotes);
    setTopGoat(getTopNDrivers(storedVotes, 'goat'));
    setTopToad(getTopNDrivers(storedVotes, 'toad'));
  }, []);

  const overallGoat = topGoat.length > 0 ? topGoat[0].name : '';
  const overallToad = topToad.length > 0 ? topToad[0].name : '';

  return (
    <div className="overall-results">
      <div className="result-column">
        <div className="result">
          <h2>Overall GOAT 🐐</h2>
          <span role="img" aria-label="goat"></span> {overallGoat}
        </div>
        <div className="result">
          <BarChart data={topGoat} title="Top 5 GOAT Votes" />
        </div>
      </div>
      <div className="result-column">
        <div className="result">
          <h2>Overall TOAD 🐸</h2>
          <span role="img" aria-label="frog"></span> {overallToad}
        </div>
        <div className="result">
          <BarChart data={topToad} title="Top 5 TOAD Votes" />
        </div>
      </div>
    </div>
  );
};

export default OverallResults;
