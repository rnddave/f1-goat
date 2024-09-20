import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const DriverDetails = ({ driver, data }) => (
  <div className={`${data.color} ${data.textColor} p-4 rounded-lg mt-4`}>
    <div className="flex">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-2">{driver}</h2>
        <p>Seasons Active: {data.seasons}</p>
        <p>Date of Birth: {data.dob}</p>
        <p>Nationality: {data.nationality}</p>
        <p>Teams: {data.teams.join(', ')}</p>
        <p>Championships: {data.championships}</p>
        <p>Total Points: {data.totalPoints}</p>
        <a href={data.wikipediaLink} target="_blank" rel="noopener noreferrer" className="underline">Wikipedia</a>
      </div>
      <div className="w-1/2">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data.chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default DriverDetails;