import React from 'react';
import { Frame, Page } from "framer";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Passport from '../../assets/passport.png';
import '../../styles/Subpages.scss';
import './About.scss';

const About = () => {
    const variants = {
        hidden: { opacity: 0, y: -100},
        visible: {opacity: 1, y: 1}
    }
    return(

        <Page  
            className="About subpage-container" 
            defaultEffect="coverflow" 
            wheelEnabled="true" 
            alignment="center" 
            width="100%" 
            height="100%" 
            contentHeight="auto" 
            direction="vertical">
  
            <Frame size="100%" width="auto" height="100vh" background="transparent">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={0.3}
                        className="section">
                        <div>
                            <h1> About </h1>
                        </div>
                        <article>
                        <img className="cover-img" src={Passport} alt="Animal Crossing Passport" />
                            <p>
                                Back in the good-ol' Geocities/Myspace/Neopets days, <br />
                                back when webrings were a thing and 16-bit pixel dolls littered "personal homepages", <br />
                                I was that kid you'd ask to style your Xanga, and I'd charge you $5 or lunch.
                            </p>
                            <p>
                                ... I knew I should've charged more.
                            </p>
                        </article>
                    </motion.div>
            </Frame>

            <Frame width="auto" height="100%" background="transparent">
                <div className="section">
                    <h2>Stack</h2>
                    <article>
                    
                    <h3><FontAwesomeIcon color="#F16529" icon={['fab', 'html5']} size="lg"/> HTML</h3>
                    <br />
                    <h3><FontAwesomeIcon color="#66D3FA" icon={['fab', 'css3-alt']} size="lg"/> CSS</h3>
                    <ul>
                        <li>SASS/SCSS</li>
                        <li>Bulma</li>
                        <li>TailwindCSS</li>
                        <li>Bootstrap</li>
                        <li>Animate.css</li>
                    </ul>
                    <h3> <FontAwesomeIcon color="#F0DB4F" icon={['fab', 'js-square']} size="lg"/> JavaScript</h3> 
                        <ul>
                            <li>NodeJS</li> 
                            <li>ReactJS</li> 
                            <li>Express</li> 
                            <li>Mongoose</li>
                        </ul>
                    <h3><FontAwesomeIcon color="#4db33d" icon={['fas', 'database']} size="lg"/> Database</h3>
                    <ul>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                    </ul>
                    </article>
                </div>
            </Frame>

            <Frame width="auto" height="100%" background="transparent">
                <div className="section">
                    <h2>Experience</h2>
                    <article>
                        <h3>egghead.io</h3>
                        <article>
                            <p>Learner Advocate</p>
                            <p>June 2020 - current</p>
                        </article>
                    </article>
                    <article>
                        <h3>General Assembly</h3>
                        <article>
                            <p>Software Engineering Apprenticeship</p>
                            <p>January 2020 - April 2020</p>
                        </article>
                    </article>
                    <article>
                        <h3><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /> Facebook</h3>
                        <article>
                            <p>News Feed/FAST UX/UI Specialist</p>
                            <p>February 2018 - September 2019</p>
                        </article>
                    </article>
                </div>
            </Frame>

        
            <Frame width="auto" height="100%" background="transparent">
                <div className="section">
                    <h2>Education</h2>
                    <article>
                        <h3>Udacity</h3>
                        <article>
                            <p>React Nanodegree Program</p>
                            <p>April 2020 - current</p>
                        </article>
                    </article>
                    <article>
                        <h3>General Assembly</h3>
                        <article>
                            <p>Software Engineering Immersive</p>
                            <p>January 2020 - April 2020</p>
                        </article>
                    </article>
                    <article>
                        <h3>Full Sail University</h3>
                        <article>
                            <p>B.S. Web Design and Development</p>
                            <p>May 2014 - July 2016</p>
                        </article>
                    </article>
                </div>
            </Frame>
            <Frame size="100%" width="auto" height="100vh" background="transparent">
                <div className="section">
                <div><h2>Portfolio</h2></div>
                <p>
                    This portfolio was made with <FontAwesomeIcon color="#f786f6" icon={['fas', 'heart']} size="lg" />
                    <br />
                    ...and some blood... 
                    <br />
                    ...maybe sweat. 
                    <br />
                    Definitely tears. 
                    <br />
                    ...and with the help of <a href="http://framer.com/api" target="new">Framer</a>, &nbsp;
                    <FontAwesomeIcon color="#4ABFF9" icon={['fab', 'font-awesome']} size="2x" /> ,
                    <FontAwesomeIcon color="#61DBFB" icon={['fab', 'react']} size="2x" /> , 
                    &nbsp; and &nbsp; 
                    <FontAwesomeIcon color="#f786be" icon={['fab', 'sass']} size="2x"/> .
                </p>
                </div>
            </Frame>
        </Page>

    );
};

export default About;