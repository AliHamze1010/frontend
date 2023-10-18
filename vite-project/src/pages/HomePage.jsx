import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './HomePage.css';
import { Link } from "react-router-dom";

function HomePage() {
    const [matches, setMatches] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/matches?year=2023')

            .then(response => {
                setMatches(response.data.data);
            })
            .catch(error => {
                console.log(error);
                setError('Failed to fetch matches data.');
            });
    }, []);

    const getScore = (scores = [], participant) => {
        // Debugging: Log the scores and participant to check their values.
        console.log('Scores:', scores);
        console.log('Participant:', participant);
    
        // Safely access scores, assuming it's an array.
        const currentScores = scores.filter(score => score.description === "CURRENT");
    
        return currentScores
            .filter(score => score.score.participant === participant)
            .reduce((total, score) => total + score.score.goals, 0);
    }
    
    

    return (
        <div className="score-simplified-container">
            <header>
                <Link to="/" className="logoLink"><h1>Score Simplified</h1></Link>
                <button>Settings</button>
            </header>

            <h2>Favorite Matches</h2>

            {/* Display error if it exists */}
            {error && <div className="error">{error}</div>}

            <div className="api-data-container">
                <div className="teams">
                    {matches.map((match, index) => (
                        <div key={index} className="match">
                            <div className="team-name">
                                {match.name.split(" vs ")[0]} 
                            </div>
                            <div className="score">
                                {getScore(match.scores, 'home')} - {getScore(match.scores, 'away')}
                            </div>
                            <div className="opponent-name">
                                {match.name.split(" vs ")[1]} 
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer>
                <p>2023 Score Simplified All Rights reserved</p>
                <Link to="/About">About</Link>
            </footer>
        </div>
    );
}

export default HomePage;