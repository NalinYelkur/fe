import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

class ContactFormArea extends Component {
    render() {
        return (
            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="contact-inner">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="contact-features-list">
                                    <h3>Schedule a free consultation with our experts</h3>
                                    <p>Learn how real time chat assistance from PlugtoChat can help you optimize end-to-end experiences for business interactions.

</p>

                                    
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                {/* Contact Form */}
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <ContactInfo />
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactFormArea;