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
            <motion.button
                 variants={item} >
                <Link to="/projects">Projects</Link>
            </motion.button>
            <motion.button
                 variants={item}>
                <Link to="/about">About</Link>
            </motion.button>
            <motion.button
                 variants={item}>
                <Link to="/contact">Contact</Link>
            </motion.button>
        </motion.div>
    );
}

export default LandingNav;