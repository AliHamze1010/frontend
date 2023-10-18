import React, { useState } from 'react';
import styles from './SignUpPage.css';
import { Link } from "react-router-dom";
import axios from 'axios';

function SignupComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    

    const handleSignup = () => {
        if (password !== retypePassword) {
            alert('Passwords do not match!');
            return;
        }

        // Make an API call to register the user
        axios.post('https://scoresimplified.onrender.com/signup', {
            username: name,
            email: email,
            password: password
        })
        .then(response => {
            // Handle the success case
            alert(response.data.message);
            
            // Redirect to login page after 3 seconds
            setTimeout(() => {
                window.location.href = "http://localhost:5173/login";
            }, 1500);
            
        })
        .catch(error => {
            // Handle the error case
            if (error.response) {
                alert(error.response.data.message);
            } else if (error.request) {
                alert('Server did not respond. Please try again later.');
            } else {
                alert('Error during the request. Please try again.');
            }
        });
    };

    return (
        <div className="signup-container">
            <Link to="/" className="logoLink">
                <h1>Score Simplified</h1>
            </Link>

            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Name"
                />
            </div>

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

            <button onClick={handleSignup}>Sign Up</button>

            <footer>
                <p>2023 Score Simplified All Rights reserved</p>
                <Link to="/About">About us</Link>
            </footer>
        </div>
    );
}

export default SignupComponent;
