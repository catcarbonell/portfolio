import React from 'react';
import { motion } from 'framer-motion';
import Socials from '../Socials';
import '../../styles/Subpages.scss';
import './Contact.scss'

const Contact = () => {
    
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100},
      }
    
    return(
        <>
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={0.3}
            className="Contact subpage-container">
            <div className="section Contact-header">
               <div><h1>Contact</h1></div>
                <div>
                    <Socials />
                    <p>Email me at <a href="mailto:helloREMOVETHIS@catcarbn.com">hello @ catcarbn.com!</a></p>
                </div>

            </div>
        </motion.div>
        </>
    );
};

export default Contact;