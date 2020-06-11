import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project from './index';
import thx4thememeries from '../../assets/thumbnails/thx4thememeries.png';
import './Project.scss';

const Thx4memeries = () => {
    return(
        <Project
            title="Thx4the Memeries"
            subtitle="A JavaScript + jQuery + AJAX-based gif search engine implementing the GIPHY API!"
            gh="https://github.com/catcarbonell/thx4memeries"
            demo="https://catcarbonell.github.io/thx4memeries"
            preview={thx4thememeries}
            challenge={
                <>
                    <p> 
                        Mainly to try a hand on calling a public API, but
                        also to practice using jQuery <br />
                        and experiment with CSS by establishing a personal web design/development style.
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
                    This was actually a homework assignment-turned-project. 
                    <br />
                    I was excited to use
                    <a href="https://developers.giphy.com/" target="new">GIPHY</a>'s well-documented API.
                </p>
                <p>
                    I integrated a few easter-eggs, such as the search bar clearing after a 
                    search has been executed, then subsequently generating a random  odd, dated quote or lyric.
                </p>
                <p>
                    Yes, this is a <a href="https://www.youtube.com/watch?v=onzL0EM1pKY" target="new">Fall Out Boy</a> reference.
                </p>
            </>
        }
        />
    );
}

export default Thx4memeries;