import React, { useState } from 'react';
import Header from './components/header.component';
import DriverBubble from './components/driver-bubble.component';
import DriverDetails from './components/driver-details.component';
import Footer from './components/footer.component';

// Dummy data for demonstration
const dummyDrivers = [
  { name: 'Lewis Hamilton', color: 'bg-blue-500', textColor: 'text-white' },
  { name: 'Max Verstappen', color: 'bg-red-500', textColor: 'text-white' },
  { name: 'Sebastian Vettel', color: 'bg-green-500', textColor: 'text-white' },
];

const dummyDriverData = {
  'Lewis Hamilton': {
    seasons: 15,
    dob: '1985-01-07',
    nationality: 'British',
    teams: ['McLaren', 'Mercedes'],
    championships: 7,
    totalPoints: 4405.5,
    wikipediaLink: 'https://en.wikipedia.org/wiki/Lewis_Hamilton',
    chartData: [
      { name: 'Races Entered', value: 310 },
      { name: 'Races Won', value: 103 },
      { name: 'Podiums', value: 182 },
    ]
  },
  // Add more dummy driver data here
};

const App = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 flex-grow">
        <div className="flex flex-wrap justify-center mb-4">
          {dummyDrivers.map((driver) => (
            <DriverBubble
              key={driver.name}
              name={driver.name}
              color={driver.color}
              textColor={driver.textColor}
              onClick={setSelectedDriver}
            />
          ))}
        </div>
        {selectedDriver && (
          <DriverDetails 
            driver={selectedDriver} 
            data={{...dummyDriverData[selectedDriver], color: dummyDrivers.find(d => d.name === selectedDriver).color, textColor: dummyDrivers.find(d => d.name === selectedDriver).textColor}}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;