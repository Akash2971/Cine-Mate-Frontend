import React, { Component } from 'react';
import "./Contact.css"
class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="contact-container">
                    <div className="contact-wrapper">
                        <div className="contact-title">
                            Contact Us
                        </div>
                        <div className="contact-content">
                            Send us an E-mail !
                        </div>
                        <div className="contact-button">
                            <a href = {`mailto:${"cinemate@gmail.com"}`}>Email Us</a>
                        </div>
                        <div className="contact-socials">
                            Socials
                            <div className="social-icons">
                                <a href = "https://instagram.com">
                                    <div className="social-1">
                                        <img src="/images/instagram.png" alt=""></img>
                                    </div>
                                </a>
                                <a href = "https://twitter.com">
                                    <div className="social-2">
                                        <img src="/images/twitter.png" alt=""></img>
                                    </div>
                                </a>
                                <a href = "https://facebook.com">
                                    <div className="social-3">
                                        <img src="/images/facebook.png" alt=""></img>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
         );
    }
}
 
export default Contact;