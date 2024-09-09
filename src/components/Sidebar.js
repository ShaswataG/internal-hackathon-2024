import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>Doctor</li>
        <li>Patients</li>
        <li>Appointment</li>
        <li>Payment</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
