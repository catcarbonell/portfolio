import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Emoji from '../Emoji';
import Socials from '../Socials';
import '../../styles/Subpages.scss';
import './Contact.scss'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        console.log('click');
        emailjs.sendForm('gmail', 'contact', e.target, 'user_hmlit3hbKCtsWaPBh8nn3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
    const [ displayConfirm, toggleConfirm ] = useState(false);
    
    
    return(
        <>
        {displayConfirm && 
            <div className="confirm-modal">
                <div className="center-content both confirm-modal-content">
                    <p>
                        Thanks so much for reaching out!
                        <br />
                        I will respond to you in 24-48 hours<Emoji symbol="👍" label="Thumbs-up" />
                        <br />
                        If you need me ASAP, feel free to slide into my DMs on 
                        <a href="http://twitter.com/catcarbn" target="new">Twitter</a> or 
                        <a href="http://linkedin.com/in/catcarbonell" target="new">LinkedIn</a>!
                    </p>
                    <button className="btn" onClick={() => toggleConfirm(!displayConfirm)}>Close</button>
                </div>
            </div>
        }
        <div className="Contact subpage-container">
            <div className="section Contact-header">
               <div> <h1>Contact</h1></div>
                <article>
                    <h3>Social Media</h3>
                    <Socials />
                </article>

                <article>
                    <h3>Send me an email!</h3>
                    <form onSubmit={sendEmail}>
                        <div>
                            <label name="name">Name</label>
                            <input required type="text" placeholder="name"  name="from_name" />
                        </div>
                        <div>
                            <label name="email">Email</label>
                            <input required type="email" placeholder="email" name="from_email" />
                        </div>
                        <div>
                            <label name="message">Message</label>
                            <textarea placeholder="what's up?" name="message_html" rows="5"></textarea>
                        </div>
                        <div>
                            <button className="btn" type="submit" onClick={() => toggleConfirm(!displayConfirm)}>Submit</button>
                        </div>
                    </form>
                </article>
            </div>
        </div>
        </>
    );
};

export default Contact;