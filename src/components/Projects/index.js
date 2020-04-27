import React from 'react';
import ProjectItem from './ProjectItem';
import '../../styles/DarkModeApp.scss';
import '../../styles/Subpages.scss';
import './Projects.scss';

const Projects = () => {
    return(
        <div className="subpage-container Projects">
            <section>
                <h1>Projects</h1>
                <article className="Project-container">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />


                </article>
            </section>
          
        </div>
    );
};

export default Projects;