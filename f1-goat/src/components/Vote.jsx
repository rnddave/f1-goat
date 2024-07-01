import React, { useState } from 'react';
import drivers from '../data/drivers.json';
import './Vote.css';

const Vote = ({ onVote }) => {
  const [goatVote, setGoatVote] = useState('');
  const [toadVote, setToadVote] = useState('');

  const handleGoatVote = (e) => {
    setGoatVote(e.target.value);
  };

  const handleToadVote = (e) => {
    setToadVote(e.target.value);
  };

  const handleSubmit = () => {
    onVote(goatVote, toadVote);
  };

  return (
    <div className="vote-container">
      <h2>Who is your F1 GOAT? 🐐</h2>
      <select value={goatVote} onChange={handleGoatVote}>
        <option value="">Select a driver</option>
        {drivers.map((driver, index) => (
          <option key={index} value={driver}>
            {driver}
          </option>
        ))}
      </select>

      <h2>Who is Terrible On Any Day (The TOAD)? 🐸</h2>
      <select value={toadVote} onChange={handleToadVote}>
        <option value="">Select a driver</option>
        {drivers.map((driver, index) => (
          <option key={index} value={driver}>
            {driver}
          </option>
        ))}
      </select>

      <button onClick={handleSubmit}>Submit Your Vote</button>
    </div>
  );
};

export default Vote;
