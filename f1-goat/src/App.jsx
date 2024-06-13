import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Stats from './components/Stats';
import BarChartSection from './components/BarChartSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <BarChartSection />
              <Stats />
              
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
