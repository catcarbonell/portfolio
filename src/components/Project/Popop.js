import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project from './index';
import popop from '../../assets/thumbnails/popop.png';
import './Project.scss';

const Popop = () => {
    return(
        <Project
            title="POPOP JS"
            subtitle="A super lightweight modal framework made with vanilla JavaScript!"
            gh="https://github.com/catcarbonell/popop"
            demo="https://catcarbonell.github.io/popop"
            preview={popop}
            challenge={
                <>
                    <p> 
                        Create a simple, modular modal plugin that's easily customizable, especially for code newbies/bootcampers.
                    </p>
                </>
            }
            stack={
            <>
            <FontAwesomeIcon color="#F16529" className="icon" icon={['fab', 'html5']} size="3x"/>
            <FontAwesomeIcon color="#66D3FA" className="icon" icon={['fab', 'css3-alt']} size="3x"/>
            <FontAwesomeIcon color="#F0DB4F" className="icon" icon={['fab', 'js-square']} size="3x"/>
            </>
        }
        solution={
            <>
                <p>
                    During our first project presentations, I kept hearing my
                    classmates say,
                    <br />
                    "I needed a modal, but I didn't like the 
                    way (framework) did theirs, so I made my own."
                </p>
                <p>
                    POPOP boasts the use of only two files, 
                    3 required classes, and less than 80 lines of JS! 
                    (Including the comments!)
                </p>
                <p>
                    What makes it modular is that the only thing the dev has 
                    to do to make it work is to match the div id to the data-modal-id.
                    No need to balance AddEventListeners or make promises!
                </p>
                
            </>
        }
        />
    );
}

export default Popop;