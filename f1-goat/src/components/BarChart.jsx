import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ data, title }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Votes',
        data: data.map(item => item.votes),
        backgroundColor: '#f1c40f',
        borderColor: '#f1c40f',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff' // Y-axis text color
        }
      },
      x: {
        ticks: {
          color: '#ffffff' // X-axis text color
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff' // Legend text color
        }
      }
    }
  };

  return (
    <div style={{ height: '300px' }}>
      <h3 style={{ color: '#ffffff' }}>{title}</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
