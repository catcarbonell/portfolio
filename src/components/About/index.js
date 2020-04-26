import React from 'react';
import Passport from '../../assets/passport.png';
import './About.scss';

const About = () => {
    return(
        <div className="About">
            <section className="passport-img-container">
                <div>
                    <h1> About </h1>
                </div>
                <img className="passport-img" src={Passport} alt="Animal Crossing Passport" />
            </section>
            <section>
                <h2>Currently</h2>
                <article>
                    <div>
                        <span>
                            <i className="fas fa-map-marker-alt fa-lg" aria-label="Location"></i>
                            &nbsp;&nbsp; San Francisco, Bay Area, CA
                        </span>
                    </div>
                    <div>
                        <span>
                            <i className="fas fa-book" aria-label="Studying"></i>
                            &nbsp;&nbsp; Studying React and Algorithms
                        </span>
                    </div>
                    <div>
                        <span>
                            <i className="fas fa-gamepad fa-lg" aria-label="Playing"></i>
                            &nbsp;&nbsp; Animal Crossing: New Horizons
                        </span>
                    </div>
                    <div>
                        <span>
                            <i className="far fa-building fa-lg" aria-label="Looking for work"></i>
                            &nbsp;&nbsp; Available for new opportunities!
                        </span>
                    </div>
                </article>
            </section>
            <section className="About-stack">
                <h2>Stack</h2>
                <article>
                    <span className="icon">
                        <i className="fab fa-js-square fa-3x"></i>
                    </span>
                    <span className="icon">
                        <i className="fab fa-node-js fa-3x"></i>
                    </span>
                    <span className="icon">
                        <i className="fab fa-react fa-3x"></i>
                    </span>
                    <span className="icon">
                        <i className="fab fa-html5 fa-3x"></i>
                    </span>
                    <span className="icon">
                        <i className="fab fa-css3-alt fa-3x"></i>
                    </span>
                    <span className="icon">
                        <i className="fab fa-sass fa-3x"></i>
                    </span>
                </article>
                <article>
                    <p> 
                        I am a web developer whose strengths lay in
                        UI design and development. 
                        <br />
                        I do have experience with
                        MongoDB, PostgreSQL, Python, and Django. 
                    </p>
                    <p>
                        I design and develop mobile-first,
                        and always consider accessibility for my users.
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
                    <h3>Facebook</h3>
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