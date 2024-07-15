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
      const sortedToad = getTopNDrivers(votes, 'toad').sort((a, b) => a.votes - b.votes);
      setTopToad(sortedToad);
    }
  }, [votes]);

  const overallGoat = topGoat.length > 0 ? topGoat[0] : { name: '', votes: 0 };
  const overallToad = topToad.length > 0 ? topToad[0] : { name: '', votes: 0 };

  return (
    <div className="overall-results">
      <div className="result-column">
        <div className="result">
          <h2>Overall GOAT 🐐</h2>
          <span role="img" aria-label="goat">
            {overallGoat.name}
          </span>
          <span className="votes">
            {overallGoat.votes} votes
          </span>
        </div>
        <div className="result">
          <BarChart data={topGoat} title="Top 5 GOAT Votes" />
        </div>
      </div>
      <div className="result-column">
        <div className="result">
          <h2>Overall TOAD 🐸</h2>
          <span role="img" aria-label="frog">
            {overallToad.name}
          </span>
          <span className="votes">
            {overallToad.votes} votes
          </span>
        </div>
        <div className="result">
          <BarChart data={topToad} title="Top 5 TOAD Votes" />
        </div>
      </div>
    </div>
  );
};

export default OverallResults;
