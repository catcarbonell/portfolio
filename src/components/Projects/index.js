import React from 'react';
import ProjectItem from './ProjectItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import killerkao from '../../assets/thumbnails/killerkao.png';
import popop from '../../assets/thumbnails/popop.png';
import pikatsume from '../../assets/thumbnails/pikatsume.png';
import thx4thememeries from '../../assets/thumbnails/thx4thememeries.png';
import '../../styles/DarkModeApp.scss';
import '../../styles/Subpages.scss';
import './Projects.scss';

const Projects = () => {
    const js = <span className="icon"><FontAwesomeIcon icon={['fab', 'js-square']} size="2x"/></span>;
    const python =  <span className="icon"><FontAwesomeIcon icon={['fab', 'python']} size="2x"/></span>;
 
    return(
        <div className="subpage-container Projects">
            <section>
                <h1>Projects</h1>
                <article className="Project-container">

                    <ProjectItem 
                        title="Killer Kao"
                        thumbnail={killerkao}
                        alt="Landing screenshot of my project Killer Kao"  
                        description="A rock-paper-scissors-like fighting game made with pure vanilla JavaScript!"
                        stack={js}
                        project="/killerkao"
                        gh="https://github.com/catcarbonell/killerkao"
                        demo="https://catcarbonell.github.io/killerkao/"
                        />

                    <ProjectItem 
                        title="POPOP JS"
                        thumbnail={popop}
                        alt="Landing screenshot of my project PopopJS"
                        stack={js}
                        project="/popop"
                        description="A tiny, easily-customizable vanilla JavaScript modal framework / package!"
                        gh="https://github.com/catcarbonell/popop"
                        demo="https://catcarbonell.github.io/popop/"
                        />

                    <ProjectItem 
                        title="thx 4 the memeries"
                        thumbnail={thx4thememeries}
                        alt="Landing screenshot of my project thanks for the meme-ries"
                        stack={js}
                        description="A JavaScript + jQuery + AJAX-based gif search engine implementing the GIPHY API!"
                        gh="https://github.com/catcarbonell/thx4memeries"
                        demo="https://catcarbonell.github.io/thx4memeries/"
                        />
                        
                    <ProjectItem 
                        title="Pikatsume" 
                        thumbnail={pikatsume}
                        alt="Landing screenshot of my Python project Pikatsume"
                        description="A gatcha game for those who love Pikachu!  
                        Made with Django, JavaScript, Bulma and the Stripe API!"
                        stack= {python}
                        // gh="https://git.generalassemb.ly/catcarbonell/project-Pikatsume"
                        demo="https://pikatsume.herokuapp.com/"
                        />


                </article>
            </section>
          
        </div>
    );
};

export default Projects;