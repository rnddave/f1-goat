import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import BarChartSection from './components/BarChartSection';
import Stats from './components/Stats';
import Vote from './components/Vote';
import UserVotes from './components/UserVotes';
import OverallResults from './components/OverallResults';
import Footer from './components/Footer';
import { getVotes, saveVotes } from './utils/generateVotes';
import './App.css';

const App = () => {
  const [votes, setVotes] = useState(getVotes());
  const [userVotes, setUserVotes] = useState({
    goat: localStorage.getItem('userGoatVote') || '',
    toad: localStorage.getItem('userToadVote') || ''
  });

  useEffect(() => {
    setVotes(getVotes());
  }, []);

  const handleVote = (goat, toad) => {
    const updatedVotes = { ...votes };
    if (goat) {
      updatedVotes.goat[goat] = (updatedVotes.goat[goat] || 0) + 1;
      localStorage.setItem('userGoatVote', goat);
    }
    if (toad) {
      updatedVotes.toad[toad] = (updatedVotes.toad[toad] || 0) + 1;
      localStorage.setItem('userToadVote', toad);
    }
    setVotes(updatedVotes);
    saveVotes(updatedVotes);
    setUserVotes({ goat, toad });
  };

  const hasVoted = userVotes.goat || userVotes.toad;

  return (
    <Router>
      <div className="App">
        <Hero />
        {!hasVoted && <Vote onVote={handleVote} />}
        {hasVoted && <UserVotes goatVote={userVotes.goat} toadVote={userVotes.toad} />}
        <OverallResults />
        <div className="main-content">
          <div className="left-column">
            <BarChartSection />
          </div>
          <div className="right-column">
            <Stats />
          </div>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
