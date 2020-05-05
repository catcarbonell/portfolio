import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project from './index';
import pikatsume from '../../assets/thumbnails/pikatsume.png';
import jacob from '../../assets/jacob.jpg';
import johnson from '../../assets/johnson.png';
import headshot from '../../assets/headshot.jpg';
import './Project.scss';

const Thx4memeries = () => {
    return(
        <Project
            title="Pikatsume"
            subtitle="A gatcha game for those who love Pikachu! Made with Django, JavaScript, Bulma and the Stripe API!"
            demo="https://pikatsume.herokuapp.com/"
            preview={pikatsume}
            team = {
                <>
                <div className="team-tile">
                    <img src={jacob} alt="Jacob Kleiman" />
                    <div><h3>Jacob Kleiman</h3></div>
                    <p className="subtitle">Fullstack Developer</p>
                    <div>
                        <a href="https://jacobkleiman.com" target="new">Portfolio</a>
                        <a href="https://www.linkedin.com/in/jacobakleiman/" target="new">LinkedIn</a>
                    </div>
                </div>
                <div className="team-tile">
                    <img src={johnson} alt="Johnson Thieu" />
                    <div><h3>Johnson Thieu</h3></div>
                    <p className="subtitle">Fullstack Developer</p>
                    <div>
                        <a href="https://www.linkedin.com/in/johnson-thieu/" target="new">LinkedIn</a>
                    </div>
                </div>
                <div className="team-tile">
                    <img src={headshot} alt="lol me." />
                    <div><h3>My Role</h3></div>
                    <p className="subtitle">
                        UX Designer <br />
                        Front-end Developer
                    </p>
                </div>
                </>
            }
            challenge={
                <>
                    <p> 
                        This project was assigned in the midst of changing our curriculum during
                        the Shelter-In-Place order due to the pandemic, so adjusting to remote-learning was
                        definitely one challenge.
                    </p>
                    <p>
                        The other was to create a Django-based app in one week. <br />
                         Extra credit if you use an external API.
                    </p>
                </>
            }
            stack={
                <>
                <FontAwesomeIcon color="#F16529" className="icon" icon={['fab', 'html5']} size="3x"/>
                <FontAwesomeIcon color="#66D3FA" className="icon" icon={['fab', 'css3-alt']} size="3x"/>
                <FontAwesomeIcon color="#F0DB4F" className="icon" icon={['fab', 'js-square']} size="3x"/>
                <FontAwesomeIcon color="#F0DB4F" className="icon" icon={['fab', 'python']} size="3x"/>
                </>
            }

        solution={
            <>
                <p>
                   This was one of my favorite projects.
                </p>
                <p>
                    Despite the circumstances, we managed to achieve and learn a lot--
                    including integrating the Stripe API with Python.
                </p>
                <p>
                    I mostly did the front-end design/development and Stripe integration.
                </p>
                <p>
                    Johnson and Jacob did most of the backend, establishing the routes, linking
                    urls to views, and maintaining the Pikabase (Pikachu database).<br />
                    We worked together to connect the front-end to the backend.
                </p>
                <p>
                    Jacob took it upon himself to deploy the app to Heroku, so props and many thanks to him for doing so!
                </p>
            </>
        }
        />
    );
}

export default Thx4memeries;