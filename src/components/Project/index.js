import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Frame, Page } from "framer"

import './Project.scss';

const Project = (props) => {
    const ghLink = <a href={props.gh} target="new">GitHub</a>;
    const team =   
        <Frame 
            size="100%" 
            width="auto" 
            height="100vh" 
            background="transparent">
            <div className="section Project-team">
                <div>
                    <h2>The Team</h2>
                </div>
                <article>
                    {props.team}
                </article>
            </div>
        </Frame>;
    return (
        <div className="Project subpage-container">
           <Page 
                defaultEffect="coverflow" 
                wheelEnabled="true" 
                alignment="center" 
                width="100%" 
                height="100%" 
                contentHeight="auto" 
                direction="vertical">
                    <Frame 
                        size="100%" 
                        width="auto" 
                        height="100vh" 
                        background="transparent">

                        <div className="section Project-header">
                            
                            <div><h1>{props.title}</h1></div>
                            
                            <h3>{props.subtitle}</h3>
                            <ul>
                                {(props.gh === undefined) ? '' : ghLink}
                                <a href={props.demo} target="new">Live Demo</a>
                            </ul>
                            <ul>
                                    {props.stack}
                            </ul>

                        </div>
                    </Frame>

                    <Frame 
                        size="100%" 
                        width="auto" 
                        height="100vh" 
                        background="transparent">
                        <div className="section">
                                <img src={props.preview} alt="project-thumbnail" />
                        </div>
                    </Frame>

                    {(props.team === undefined) ? '' : team}

                    <Frame 
                        size="100%" 
                        width="auto" 
                        height="100vh" 
                        background="transparent">
                        <div className="section Project-challenge">
                            <h2>The Challenge</h2>
                            {props.challenge}
                        </div>
                    </Frame>

                    <Frame 
                        size="100%" 
                        width="auto" 
                        height="100%" 
                        background="transparent">
                        <div className="section Project-solution">
                            <h2>The Process</h2>
                            {props.solution}
                        </div>
                    </Frame>
                   
           </Page>
        </div>    

    );
}

export default Project;