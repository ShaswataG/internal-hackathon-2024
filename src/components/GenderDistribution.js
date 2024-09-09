import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './GenderDistribution.css';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Female', 'Male', 'Child'],
  datasets: [
    {
      label: 'Gender Distribution',
      data: [30, 45, 25],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

function GenderDistribution() {
  return (
    <div className="gender-distribution">
      <Pie data={data} />
    </div>
  );
}

export default GenderDistribution;
