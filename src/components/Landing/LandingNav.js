import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';
import '../../styles/DarkModeApp.scss';

const LandingNav = () => {
    return (
        <div className="landing-menu">
            <button><Link to="/projects">Projects</Link></button>
            <button><Link to="/about">About</Link></button>
            <button><Link to="/contact">Contact</Link></button>
        </div>
    );
}

export default LandingNav;