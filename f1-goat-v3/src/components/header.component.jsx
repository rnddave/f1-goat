import React from 'react';

const Header = () => (
  <div className="container mx-auto px-4">
    <div className="flex items-center mb-4">
      <img src="/api/placeholder/100/100" alt="F1 Logo" className="mr-4" />
      <h1 className="text-3xl font-bold">F1 G.O.A.T</h1>
    </div>
    <p className="text-center p-4 bg-gray-100 rounded-lg mb-4">
      I kind of love Formula One and all of the fascinating data around this sport.
    </p>
  </div>
);

export default Header;