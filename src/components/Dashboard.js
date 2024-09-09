import React from 'react';
import DoctorCard from './DoctorCard';
import PatientCard from './PatientCard';
import ReportChart from './ReportChart';
import BalanceChart from './BalanceChart';
import HospitalOverview from './HospitalOverview';
import GenderDistribution from './GenderDistribution';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>OUR PATIENTS OUR PRIORITY</h2>
      <div className="cards-section">
        <DoctorCard />
        <PatientCard />
      </div>
      <div className="charts-section">
        <ReportChart />
        <BalanceChart />
      </div>
      <HospitalOverview />
      <GenderDistribution />
    </div>
  );
}

export default Dashboard;
