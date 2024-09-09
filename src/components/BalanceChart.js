import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './ReportChart.css';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr'],
  datasets: [
    {
      label: 'Doctors',
      data: [80, 85, 90, 80, 70, 75],
      borderColor: 'green',
    },
    {
      label: 'Patients',
      data: [60, 65, 70, 60, 55, 60],
      borderColor: 'blue',
    },
  ],
};

function ReportChart() {
  return (
    <div className="report-chart">
      <Line data={data} />
    </div>
  );
}

export default ReportChart;
