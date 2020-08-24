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
                            <p>
                                From the days of indie web designers of the late 90's to early 00's,
                                Back during the good ol' days of Geocities, Myspace, and 16-bit pixel dolls
                                I have provided netizens with top-notch logos and graphics cobbled together in Photoshop
                                and blog layouts, topped with trailing stars chasing your cursor.
                            </p>
                            <p>
                                My UX design and UI engineering skills and sensibilities have been more refined as of late,
                                as I perfect the mystic arts of <a href="https://reactjs.org" target="new">ReactJS</a>, 
                                and wizardry of <a href="https://framer.com/api">Framer</a>. 
                            </p>
                            <p>
                                I am also adept at rapidly crafting ecommerce fronts using <a href="https://shopify.com" target="new">Shopify</a> as a Shopify Partner
                                and personal/business landing pages on <a href="https://">Webflow</a>.     
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
                        <h3>Freelance</h3>
                        <article>
                            <p>UX Designer / UI Developer + Consultant</p>
                            <p>January 2013 - current</p>
                        </article>
                    </article>
                    <article></article>
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
                <p>
                    But seriously, this was all coded from scratch.
                </p>
                </div>
            </Frame>
        </Page>

    );
};

export default About;