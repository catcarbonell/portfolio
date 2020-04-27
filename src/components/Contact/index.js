import React from 'react';
import emailjs from 'emailjs-com';
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

    
    return(
        <div className="Contact subpage-container">
            <section className="Contact-header">
                <h1>Contact</h1>
                <article>
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
                            <button className="btn" type="submit">Submit</button>
                        </div>
                    </form>
                </article>
            </section>
        </div>
    );
};

export default Contact;