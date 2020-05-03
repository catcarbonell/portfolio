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
                    <h1>Hi, I'm <Link to="/about">Cat</Link>!</h1>
                    
                    <div className="landing-description">
                    <p className="subtitle">I <Link to="/projects">design and build</Link> web apps!</p>
                    <p className="subtitle"> &amp; write newbie-friendly <a href="https://dev.to/catcarbn" target="new"> dev articles</a>!</p>
                    <p className="subtitle"> &amp; <a href="https://twitch.tv/catvscode" target="new">stream</a> my attempts at coding/design challenges on <a href="https://twitch.tv/catvscode" target="new">Twitch</a>! </p>
                    </div>

                    <LandingNav />
                </div>
            </div>
        </div>
    );
};

export default Landing;