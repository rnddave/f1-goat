import React from 'react';
import Flag from 'react-world-flags';
import './ChampionConstructorsTable.css';

const ChampionConstructorsTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="champion-constructors-table">
        <thead>
          <tr>
            <th>Constructor</th>
            <th>Country</th>
            <th>Titles</th>
            <th>Seasons</th>
          </tr>
        </thead>
        <tbody>
          {data.map((constructor, index) => (
            <tr key={index}>
              <td>{constructor.Constructor}</td>
              <td><Flag code={constructor.Country} height="16" /></td>
              <td>{constructor.Titles}</td>
              <td>{constructor.Seasons}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChampionConstructorsTable;
