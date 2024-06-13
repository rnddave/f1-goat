import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import BarChartSection from './components/BarChartSection';
import Stats from './components/Stats';
import Footer from './components/Footer';
import './App.css'; // Add this line to import global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Hero />
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
