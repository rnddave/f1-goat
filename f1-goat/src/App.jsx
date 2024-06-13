import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import BarChartSection from './components/BarChartSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <BarChartSection />
            </>
          } />
          <Route path="/driver-champions" element={<div>Driver Champions Page</div>} />
          <Route path="/driver-points" element={<div>Driver Points Page</div>} />
          <Route path="/team-champions" element={<div>Team Champions Page</div>} />
          <Route path="/engine-champions" element={<div>Engine Champions Page</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
