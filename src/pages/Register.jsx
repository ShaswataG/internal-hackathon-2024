// import { useState } from 'react';

// export default function Register() {
//     const [selectedRole, setSelectedRole] = useState('patient');

//     const handleRoleClick = (role) => {
//         setSelectedRole(role);
//     };

//     return (
//         <div className="register-container">
//             <div className="register-card">
//                 <h1 className="register-title">REGISTER</h1>
//                 <div className="role-selection">
//                     <button
//                         className={`role-button ${selectedRole === 'patient' ? 'active' : ''}`}
//                         onClick={() => handleRoleClick('patient')}
//                     >
//                         <i className="fas fa-user"></i> PATIENT
//                     </button>
//                     <button
//                         className={`role-button ${selectedRole === 'hospital' ? 'active' : ''}`}
//                         onClick={() => handleRoleClick('hospital')}
//                     >
//                         <i className="fas fa-hospital"></i> HOSPITAL
//                     </button>
//                 </div>
//                 <div className="form-container">
//                     <input type="text" placeholder="ABHA Number" className="input-field" />
//                     <input type="password" placeholder="Password" className="input-field" />
//                     <input type="password" placeholder="Confirm Password" className="input-field" />
//                     <button className="signup-button">Sign Up</button>
//                     <div className="login-option">
//                         <p>Already have an Account?</p>
//                         <button className="login-button">Login</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

import { useState } from 'react';

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
                            <i className="icon-user"></i>
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
