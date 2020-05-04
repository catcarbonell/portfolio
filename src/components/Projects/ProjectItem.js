import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const ProjectItem = (props) => {
    const [isShown, setIsShown] = useState(false);

    const ghLink = <a href={props.gh} target="new">GitHub</a>;
    
    return(
        <>
       
        <div className="ProjectItem-container"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>

            {isShown && <div className="overlay">
                <h3><span>{props.stack}</span>{props.title}</h3>
                <p>
                {props.description}
                </p>            
                
                <ul>
                    <p>
                        <Link to={props.project}>View Project Details</Link> 
                    </p>

                    {(props.gh === undefined) ? '' : ghLink}
                    <a href={props.demo} target="new">Live Demo</a>
                </ul>

            </div>}
            <img src={props.thumbnail} alt={props.alt} />
            <h3>{props.title}</h3>
            {props.stack}   
        </div>
    
    </>
    );
};

export default ProjectItem;