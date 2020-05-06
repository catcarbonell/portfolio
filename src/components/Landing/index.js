import React  from 'react';
import { Link } from 'react-router-dom';
import { Frame } from 'framer';
import {motion} from 'framer-motion';
import Emoji from '../Emoji';
import LandingNav from './LandingNav';
import headshot from '../../assets/headshot.jpg';
import '../../styles/DarkModeApp.scss';
import './Landing.scss';


const Landing = () => {
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: 0.06 } },
    }
    const letterVariants = {
        before: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 200,
            },
        },
        after: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 200,
            },
        },
    }
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
      

    const intro = Array.from("Hi! I'm Cat!");
    return (
        <div className="center-content both">
            <div className="landing-header">
                <div className="profile-img-container">
                    <img src={headshot} className="profile-img" alt="my face" />
                </div>
                <div>
                    <Frame
                        width={"50%"}
                        height={ "auto" }
                        background={ "transparent" }
                        variants={ containerVariants }
                        initial={ "before" }
                        animate={ "after" }
                        style={{
                            fontFamily: "Fira Code, monospace",
                            fontWeight: "bold",
                            letterSpacing: "0.04em",
                            fontSize: "2.2em",
                            color: "#FFF",
                            display: "flex", // Set the display value to flex
                            justifyContent: "flex-start", // Center all children elements on the x axis
                          }}
                    >
                        {intro.map((letter, index) => (
                   
                            <Frame
                                key={index}
                                width={"auto"}
                                height={26}
                                background={""}
                                variants={letterVariants}
                                style={{ position: "relative" }}
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </Frame>
                        ))}
                    </Frame> 
                    <motion.div   
                            initial="hidden"
                            animate="visible"
                            variants={list} 
                            className="landing-description"> 
                        <motion.p
                            variants={item} 
                            className="subtitle"
                            >
                            <Emoji symbol="💻" label="a laptop computer" /> 
                            I <Link to="/projects">design and build</Link> web apps!
                        </motion.p>
                        <motion.p 
                            className="subtitle"
                            variants={item}
                            > 
                            <Emoji symbol="✍🏾" label="a tan hand writing with a pen" /> &amp; write newbie-friendly <a href="https://dev.to/catcarbn" target="new"> dev articles</a>!
                        </motion.p>
                        <motion.p 
                            className="subtitle"
                            variants={item}
                            > 
                            <Emoji symbol="📺" label="a tan hand writing with a pen" /> &amp; 
                            <a href="https://twitch.tv/catvscode" target="new">stream</a> my attempts at coding challenges on <a href="https://twitch.tv/catvscode" target="new">Twitch</a>! 
                        </motion.p>
                    </motion.div>


                    <LandingNav />

                </div>
            </div> 
        </div>
    );
};

export default Landing;