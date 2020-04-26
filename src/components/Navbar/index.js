import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return(
        <div className="Navbar">
           <Link to="/">Main</Link>
           <Link to="/about">About</Link>
           <Link to="/projects">Projects</Link>
           <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Navbar