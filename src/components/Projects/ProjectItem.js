import React from 'react';


const ProjectItem = (props) => {
    const ghLink = <a href={props.gh} target="new">GitHub</a>;
    
    return(
        <div className="ProjectItem-container">
                <img src={props.thumbnail} alt={props.alt} />
                <h3>{props.title}</h3>
                <ul>
                    {props.stack}               
                </ul>
                
                <ul>
                {(props.gh === undefined) ? '' : ghLink}
                 <a href={props.demo} target="new">Live Demo</a>
                </ul>
        </div>
    );
};

export default ProjectItem;