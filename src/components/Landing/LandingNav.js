import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import './Landing.scss';
import '../../styles/DarkModeApp.scss';

const LandingNav = () => {
    const list = { 
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }
    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }
    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={list} 
            className="landing-menu">
            <button>
                <Link to="/projects">Projects</Link>
            </button>
            <button>
                <Link to="/about">About</Link>
            </button>
            <button>
                <Link to="/contact">Contact</Link>
            </button>
        </motion.div>
    );
}

export default LandingNav;