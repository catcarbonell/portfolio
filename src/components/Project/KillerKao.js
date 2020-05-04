import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project from './index';
import killerkao from '../../assets/thumbnails/killerkao.png';
import './Project.scss';

const KillerKao = () => {
    return(
        <Project
            title="Killer Kao"
            subtitle="A rock-paper-scissors-like fighting game made with pure vanilla JavaScript!"
            gh="https://github.com/catcarbonell/killerkao"
            demo="https://catcarbonell.github.io/killerkao"
            preview={killerkao}
            challenge={
                <>
                    <p>
                        Create a game from scratch using vanilla JavaScript, 
                        HTML, and CSS in one week, adhering to these requirements:
                    </p>
                    <ul>
                        <li>Render a game in the browser</li>
                        <li>
                            Switch turns between two players
                        </li>
                        <li>
                            Design logic for winning &amp; visually display which player won
                        </li>
                        <li>
                            Include separate HTML / CSS / JavaScript files
                        </li>
                        <li>
                            Use JavaScript or jQuery for DOM manipulation
                        </li>
                        <li>
                            Deploy your game online, where the rest of the world can access it
                        </li>
                        <li>
                            Use semantic markup for HTML and CSS (adhere to best practices)
                        </li>
                        <li>
                            Be reasonably complex
                        </li>
                    </ul>
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
                    My very first bootcamp project! I was done with MVP (minimum viable product) within the weekend,
                    so I spent the rest of the week integrating the bells and whistles into the project,
                    constantly asking my instructors: "What else can I do" or "What can I do better?"
                </p>
                <p>
                    I created my own
                    "How to Play" modal and applied the <a href="https://daneden.github.io/animate.css/" target="new">Animate.css</a>
                    library to my individual characters.
                </p>
                <p>
                    A part of the code I am most proud of was creating the logic that prevents
                    the user from only using "Strike" or "Block" several times in a row. Please <a href="https://catcarbonell.github.io/killerkao" target="new">try it!</a>
                </p>
            </>
        }
        design="https://raw.githubusercontent.com/catcarbonell/killerkao/master/assets/killerkao-wf.png"
        />
    );
}

export default KillerKao;