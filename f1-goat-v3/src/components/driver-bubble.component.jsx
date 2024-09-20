import React from 'react';

const DriverBubble = ({ name, color, textColor, onClick }) => (
  <div 
    className={`${color} ${textColor} rounded-lg p-2 m-2 cursor-pointer hover:opacity-80 transition-opacity`}
    onClick={() => onClick(name)}
  >
    {name}
  </div>
);

export default DriverBubble;