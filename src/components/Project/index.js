import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Project.scss'

const Project = () => {

    return (
        <div className="Project">
            <button className="close">
                <FontAwesomeIcon icon={['fas', 'times-circle']} size="2x"/>
            </button>
            <div className="Project-header">
                <h1>Killer Kao</h1>
                <p>A rock-paper-scissors-like fighting game made with pure vanilla JavaScript!</p>
            </div>
            <div className="Project-stack">
                <h3>Stack:</h3>
                <ul> 
                    <FontAwesomeIcon className="icon" icon={['fab', 'html5']} size="3x"/>
                    <FontAwesomeIcon className="icon" icon={['fab', 'css3-alt']} size="3x"/>
                    <FontAwesomeIcon className="icon" icon={['fab', 'js-square']} size="3x"/>
                </ul> 
            </div>

            <div className="Project-role">
                <h3>Role</h3>
                <p>Sole designer/developer</p>
            </div>

            <div className="Project-challenge">
                <h3>The Challenge:</h3>
            </div>
            
            <div className="Project-wf">
                <h3>Wireframes/Designs:</h3>
                <p>wireframes go here</p>
            </div>

            <div className="Project-details">
                <p></p>
            </div>
            
        </div>
    );
}

export default Project;