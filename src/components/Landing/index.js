import React from 'react';
import { Link } from 'react-router-dom';
import LandingNav from './LandingNav';
import headshot from '../../assets/headshot.jpg';
import '../../styles/DarkModeApp.scss';
import './Landing.scss';


const Landing = () => {
    return (
        <>
        <div className="landing-header">
            <div className="profile-img-container">
                <img src={headshot} className="profile-img" alt="my face" />
            </div>
            <div>
                <h1>Hello, I'm Cat!</h1>
                <p className="subtitle">I <Link to="/portfolio">design and build</Link> web apps!</p>
                <p className="subtitle">I write beginner-friendly <a href="https://dev.to/catcarbn" target="new"> dev articles</a>!</p>
                <LandingNav />
            </div>
        </div>

        </>
    );
};

export default Landing;