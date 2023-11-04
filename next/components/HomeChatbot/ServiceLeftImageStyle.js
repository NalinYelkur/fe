import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class ServiceLefttImageStyle extends Component {
    render() {
        return (

            <section className="services-area  bg-f4f6fc ptb-100  u-bg-accent">
            <div class="custom-shape-divider-top-1697747945">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
                <div className="container-fluid">
                
                    <div className="row align-items-center">
                    
                        <div className="services-image">
                            <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                <div className="image">
                                    <img src="/images/services/chat4.png" alt="image" />
                                </div>
                            </ScrollAnimation>
                        </div>
                         
                        <div className="services-content">
                            <div className="content">
                                <div className="icon">

                                    {/* <img src="/images/icon1.png" alt="image" /> */}
                                </div>

                                <h2 >Boost your productivity with our <span style={{ color: '#ff612f' }}>AI-powered </span>workspace for faster results. </h2>
                                <p >Preview Chat on your home page with one click</p>
                                <div class="custom-shape-divider-bottom-1697748031">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
                                <div class="container text-center">
                                    <div class="input-group">
                                    <input type="text" aria-label="First name" class="form-control"></input>
                                    <div>
                                    <div class="grid">
                                    <div class="g-col-4"><span class="input-group-text">Preview</span>
                                    </div>

                                    </div>
                                            
                                    </div>
                                    </div>
                                </div>
                         
                                 {/* <p>Migrate from regular chat to real-time in-app chats using APIs & messaging SDKs 
                                 from Plugtochat, a full-featured modern chat app with a team of dedicated In-house developers 
                                  & flexible hosting possibilities.*/}




                                {/* <section className="faq-area ptb-100"> */}
                {/* <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12"> */}
                            {/* <div className="faq-accordion "> 
                               

                                <Accordion allowZeroExpanded preExpanded={['a']}>
                                    <AccordionItem uuid="a">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            In-app Messaging and Chat API

                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            Using PlugtoChat API to integrate in-app messaging in your apps and websites is as easy as a switch button. You will get the status of each sent message in real-time; e.g., Sent, Delivered, Read, etc.

                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="b">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            On-Premise Deployment
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            Download the entire PlugtoChat platform and run it from your own data center or private cloud. All messages and calls route through your own data center or server.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="c">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Ready to use UI Modules
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            Plugtochat not only provides APIs but also offers ready-to-use UI modules for real-time chat integration on any platform.

                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    
                                </Accordion>
                            </div>
                            
                         {/*</div>
                    </div>
                </div>*/}
            {/* </section>  */}















                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceLefttImageStyle;