import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ref, set, get, child } from 'firebase/database';
import { database, auth } from './firebaseConfig'; // Import the auth configuration
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import Hero from './components/Hero';
import BarChartSection from './components/BarChartSection';
import Stats from './components/Stats';
import Vote from './components/Vote';
import UserVotes from './components/UserVotes';
import OverallResults from './components/OverallResults';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [votes, setVotes] = useState({});
  const [userVotes, setUserVotes] = useState({
    goat: localStorage.getItem('userGoatVote') || '',
    toad: localStorage.getItem('userToadVote') || ''
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const signInUser = async () => {
      await signInAnonymously(auth);
    };

    const fetchVotes = async () => {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, 'votes'));
      if (snapshot.exists()) {
        setVotes(snapshot.val());
      } else {
        console.log('No data available');
      }
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchVotes();
      } else {
        signInUser();
      }
    });
  }, []);

  const handleVote = async (goat, toad) => {
    const updatedVotes = { ...votes };

    if (userVotes.goat && goat && userVotes.goat !== goat) {
      updatedVotes.goat[userVotes.goat]--;
    }
    if (userVotes.toad && toad && userVotes.toad !== toad) {
      updatedVotes.toad[userVotes.toad]--;
    }

    if (goat) {
      updatedVotes.goat = {
        ...updatedVotes.goat,
        [goat]: (updatedVotes.goat[goat] || 0) + 1
      };
      localStorage.setItem('userGoatVote', goat);
    }
    if (toad) {
      updatedVotes.toad = {
        ...updatedVotes.toad,
        [toad]: (updatedVotes.toad[toad] || 0) + 1
      };
      localStorage.setItem('userToadVote', toad);
    }

    setVotes(updatedVotes);

    await set(ref(database, 'votes'), updatedVotes).catch((error) => {
      console.error("Error saving votes: ", error);
    });

    setUserVotes({ goat, toad });
  };

  const handleChangeVote = () => {
    setUserVotes({ goat: '', toad: '' });
  };

  const hasVoted = userVotes.goat || userVotes.toad;

  return (
    <Router>
      <div className="App">
        <Hero />
        {!hasVoted && <Vote onVote={handleVote} />}
        {hasVoted && (
          <div>
            <UserVotes goatVote={userVotes.goat} toadVote={userVotes.toad} />
            <button onClick={handleChangeVote}>Change Vote</button>
          </div>
        )}
        <OverallResults votes={votes} />
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
