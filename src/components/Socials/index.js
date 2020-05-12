import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Socials = () => {

    return(
        <div className="Socials">
            <ul>
                <a href="http://github.com/catcarbn" target="new">
                     <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
                </a>
                 <a href="http://twitter.com/catcarbn" target="new">
                     <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
                </a>
                <a href="http://linkedin.com/in/catcarbonell" target="new">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                </a>
                <a href="http://dev.to/catcarbn" target="new">
                    <FontAwesomeIcon icon={['fab', 'dev']} size="2x" />
                </a>
                <a href="http://dribbble.com/catcarbn">
                    <FontAwesomeIcon icon={['fab', 'dribbble']} size="2x"/>
                </a>
             </ul>
        </div>
    );

}

export default Socials;