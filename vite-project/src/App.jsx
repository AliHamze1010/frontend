import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/forgotpassword" element={<ForgotPassword/>} />
                <Route path="/signup" element={<SignUpPage/>} />
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </Router>
    );
}

export default App;
