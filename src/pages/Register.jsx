import { useState } from 'react';
import UserIcon from '../assets/login/userIcon.svg'
import HospitalIcon from '../assets/login/hospitalIcon.svg';

export default function Login() {
    const [activeTab, setActiveTab] = useState('patient');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>REGISTER</h1>

                <div className="login-tabs">
                    <div
                        className={`tab ${activeTab === 'patient' ? 'active' : ''}`}
                        onClick={() => handleTabClick('patient')}
                    >
                        <span>Patient</span>
                    </div>
                    <div
                        className={`tab ${activeTab === 'hospital' ? 'active' : ''}`}
                        onClick={() => handleTabClick('hospital')}
                    >
                        <span>Hospital</span>
                    </div>
                </div>

                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="abha-number" className="input-label">
                            {/* <i className="icon-user"></i> */}
                            <img src={activeTab === "patient" ? UserIcon : HospitalIcon} width="20px" />
                            <input
                                type="text"
                                id="abha-number"
                                placeholder={activeTab === "patient" ? "ABHA Number": "Hospital Reg Number"}
                                className="input-field"
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="input-label">
                            <i className="icon-lock"></i>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="input-field"
                            />
                            <i className="icon-eye"></i>
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="input-label">
                            <i className="icon-lock"></i>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="input-field"
                            />
                            <i className="icon-eye"></i>
                        </label>
                    </div>

                    <div className="form-options">
                        <label>
                            <input type="checkbox" /> Remember Me
                        </label>
                        <a href="/" className="forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-button">Login</button>
                </form>

                <div className="signup-link">
                    <span>Already have an account?</span>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};
