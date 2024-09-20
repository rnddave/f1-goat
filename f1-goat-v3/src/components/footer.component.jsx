import React from 'react';

const Footer = () => (
  <footer className="mt-8 py-4 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <a href="https://github.com/rnddave/f1-goat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          Github Repo
        </a>
        <a href="https://www.david-dickinson.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          David Dickinson
        </a>
        <a href="https://twitter.com/oneMore_David" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          Twitter (X)
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;