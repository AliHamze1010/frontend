import React, { useState } from 'react';
import './ForgotPassword.css';
import { Link } from "react-router-dom";

function PasswordResetComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const handleReset = () => {
        if (password !== retypePassword) {
            alert('Passwords do not match!');
            return;
        }
        // Handle password reset logic here
    };

    return (
        <div className="reset-container">
            <Link to="/" className="logoLink">
                <h1>Score Simplified</h1>
            </Link>

            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Email"
                />
            </div>

            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Password"
                />
            </div>

            <div className="input-group">
                <label htmlFor="retype-password">Retype Password</label>
                <input 
                    type="password" 
                    id="retype-password" 
                    value={retypePassword} 
                    onChange={e => setRetypePassword(e.target.value)} 
                    placeholder="Retype Password"
                />
            </div>

            <button onClick={handleReset}>Reset Password</button>

            <footer>
                <p>2023 Score Simplified All Rights reserved</p>
                <Link to="/About">About us</Link>
            </footer>
        </div>
    );
}

export default PasswordResetComponent;
