import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return(
        <div className="Navbar">
           <Link className="navbar-item" to="/">Main</Link>
           <Link className="navbar-item" to="/about">About</Link>
           <Link className="navbar-item" to="/projects">Projects</Link>
           <Link className="navbar-item" to="/contact">Contact</Link>
        </div>
    );
}

export default Navbar