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
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
      }
    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={list} 
            className="landing-menu">
             <Link to="/projects">
                 <motion.button variants={item}>Projects</motion.button>
            </Link>
            <Link to="/about">
                <motion.button variants={item}>About</motion.button>
            </Link>
            <Link to="/contact">
                <motion.button variants={item}>Contact</motion.button>
            </Link>
        </motion.div>
    );
}

export default LandingNav;