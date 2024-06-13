import React from 'react';
import Flag from 'react-world-flags';
import './ChampionDriversTable.css';

const ChampionDriversTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="champion-drivers-table">
        <thead>
          <tr>
            <th>Driver</th>
            <th>Country</th>
            <th>Titles</th>
            <th>Seasons</th>
          </tr>
        </thead>
        <tbody>
          {data.map((driver, index) => (
            <tr key={index}>
              <td>{driver.Driver}</td>
              <td><Flag code={driver.Country} height="16" /></td>
              <td>{driver.Titles}</td>
              <td>{driver.Seasons}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChampionDriversTable;
