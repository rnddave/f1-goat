import React from 'react';
import Flag from 'react-world-flags';
import './ChampionEnginesTable.css';

const ChampionEnginesTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="champion-engines-table">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Country</th>
            <th>Titles</th>
            <th>Seasons</th>
          </tr>
        </thead>
        <tbody>
          {data.map((engine, index) => (
            <tr key={index}>
              <td>{engine.Manufacturer}</td>
              <td><Flag code={engine.Country} height="16" /></td>
              <td>{engine.Titles}</td>
              <td>{engine.Seasons}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChampionEnginesTable;
