import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Passport from '../../assets/passport.png';
import '../../styles/Subpages.scss';

const About = () => {
    return(
        <div className="About subpage-container">
            <section>
                <div>
                    <h1> About </h1>
                </div>
                <img className="cover-img" src={Passport} alt="Animal Crossing Passport" />
                    <article>
                    <p>
                    This portfolio was made with <FontAwesomeIcon icon={['fas', 'heart']} size="lg" />! 
                    <br />
                    ...with the help of <FontAwesomeIcon icon={['fab', 'font-awesome']} size="2x" /> , <FontAwesomeIcon icon={['fab', 'react']} size="2x" /> , 
                    &nbsp; and &nbsp; <FontAwesomeIcon icon={['fab', 'sass']} size="2x"/>
                    </p>
                </article>
            </section>
            <section>
                <h2>Currently</h2>
                <article>
                <h3>As of 4/26/2020:</h3>
                </article>
                <article>
                    <div>
                        <span>
                            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} size="lg"/>
                            &nbsp;&nbsp; San Francisco, Bay Area, CA
                        </span>
                    </div>
                    <div>
                        <span>
                        <FontAwesomeIcon icon={['fas', 'book']} size="lg"/>
                            &nbsp;&nbsp; Studying React and Algorithms
                        </span>
                    </div>
                    <div>
                        <span>
                            <FontAwesomeIcon icon={['fas', 'gamepad']} size="lg"/>
                            &nbsp;&nbsp; Animal Crossing: New Horizons
                        </span>
                    </div>
                    <div>
                        <span>
                            <FontAwesomeIcon icon={['fas', 'building']} size="lg"/>
                            &nbsp;&nbsp; Available for new opportunities!
                        </span>
                    </div>
                </article>
            </section>
            <section className="About-stack">
                <h2>Stack</h2>
                <article>
                    <ul>
                        <span className="icon"><FontAwesomeIcon icon={['fab', 'js-square']} size="2x"/></span>
                        <span className="icon"><FontAwesomeIcon icon={['fab', 'node-js']} size="2x"/></span>
                        <span className="icon"><FontAwesomeIcon icon={['fab', 'react']} size="2x"/></span>
                        <span className="icon"><FontAwesomeIcon icon={['fab', 'sass']} size="2x"/></span>
                        <span className="icon"><FontAwesomeIcon icon={['fas', 'leaf']} size="2x"/></span>
                    </ul>
                </article>
                <article>
                    <p> 
                       JavaScript + Node, React, Express, Mongoose
                    </p>
                    <p>
                        CSS3 + Sass/Scss, Bulma, Bootstrap
                    </p>
                    <p>
                        SQL/NoSQL + MongoDB, PostgreSql, MySQL
                    </p>
                    <p>
                        Python + Django
                    </p>
                    <p>
                        HTML5
                    </p>
                </article>
            </section>

            <section className="About-experience">
                <h2>Experience</h2>
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
            </section>
            <section className="About-education">
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
            </section>
        </div>
    );
};

export default About;