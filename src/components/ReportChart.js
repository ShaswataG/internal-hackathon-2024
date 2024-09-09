import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './ReportChart.css';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = [
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
  {
    label: 'Income',
    data: [1500, 1400, 1350, 1600, 1700, 1550],
    borderColor: 'purple',
  },
  {
    label: 'Outcome',
    data: [1200, 1250, 1300, 1100, 1150, 1250],
    borderColor: 'red',
  },
];

function ReportChart() {
  return (
    <div className="charts-container">
      {chartData.map((dataset, index) => (
        <div key={index} className="report-chart">
          <Line
            data={{
              labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr'],
              datasets: [dataset],
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default ReportChart;
