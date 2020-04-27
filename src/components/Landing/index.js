import React from 'react';
import { Link } from 'react-router-dom';
import LandingNav from './LandingNav';
import headshot from '../../assets/headshot.jpg';
import '../../styles/DarkModeApp.scss';
import './Landing.scss';


const Landing = () => {
    return (
        <div className="center-content both">
            <div className="landing-header">
                <div className="profile-img-container">
                    <img src={headshot} className="profile-img" alt="my face" />
                </div>
                <div>
                    <h1>Hello, I'm <Link to="/about">Cat</Link>!</h1>
                    <p className="subtitle">I <Link to="/projects">design and build</Link> web apps</p>
                    <p className="subtitle"> &amp; write beginner-friendly <a href="https://dev.to/catcarbn" target="new"> dev articles</a>!</p>
                    <LandingNav />
                </div>
            </div>
        </div>
    );
};

export default Landing;