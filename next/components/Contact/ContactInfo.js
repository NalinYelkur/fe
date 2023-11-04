import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info">
                <div className="contact-info-content">
                    <h3>Contact us by Phone Number or Email Address</h3>

                    <h2>
                        <span className="email">support@plugtochat.com</span><br/>
                        <span className="or">OR</span>

                        <span className="email">info@plugtochat.com</span>

                    </h2>

                    <ul className="social">
                        <li>
                            <a href="https://twitter.com/plugtochat" target="_blank">
                                <i className="bx bxl-twitter"></i>
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://www.facebook.com/ChatAPIandSDK/" target="_blank">
                                <i className='bx bxl-facebook'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/plugtochat/" target="_blank">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/plugtochat/?hl=en" target="_blank">
                                <i className="bx bxl-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContactInfo;