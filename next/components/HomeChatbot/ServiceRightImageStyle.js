import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

class ServiceRightImageStyle extends Component {
    render() {
        return (
    <section className="services-area  ptb-100  b--u-py-12">
    
    <main role="main" class="inner cover ">
        <h1 class="cover-heading">Raise Engagement, Retention, & Conversion rate.</h1>
        <h2 class="color">Modular. Lightweight. Easy to Integrate.</h2>
        
        {/* <p class="lead">Drive more engagement and transactions by connecting 
                                 buyers with sellers and improving customer support. 
                                 Make your sessions immersive with 1-on-1 chat and chat 
                                 rooms for students and teachers. Integrate real-time 
                                 conversations on your social platform and improve retention 
                                 on your social network or online community with active user
                                  engagement.</p>
                                <p class="lead">Build reliable chats for online healthcare platforms
                                 caring for patients' better health through doctors' better
                                  interactions. Create an interactive and retainable platform 
                                  for freelancers, job seekers, and applicants to reach and respond to companies, 
                                  recruiters, and administrators.</p>*/}
        
      </main>
                <div className="container-fluid ">
                    <div className="row align-items-center">
                        {/* <div className="services-content">
                            <div className="content left-content"> */}
                                <div className="icon">
                                    {/* <img src="/images/icon1.png" alt="image" /> */}
                                </div>

                                {/* <h2>Raise Engagement, Retention, & Conversion rate</h2> */}
                                {/* <p>Drive more engagement and transactions by connecting 
                                 buyers with sellers and improving customer support. 
                                 Make your sessions immersive with 1-on-1 chat and chat 
                                 rooms for students and teachers. Integrate real-time 
                                 conversations on your social platform and improve retention 
                                 on your social network or online community with active user
                                  engagement.</p>
                                <p> Build reliable chats for online healthcare platforms
                                 caring for patients' better health through doctors' better
                                  interactions. Create an interactive and retainable platform 
                                  for freelancers, job seekers, and applicants to reach and respond to companies, 
                                  recruiters, and administrators. </p>*/}
                                {/* <Link href="/service-details">
                                    <a className="default-btn">
                                        <i className="bx bxs-spreadsheet"></i> 
                                     Read More 
                                        <span></span>
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                        <div className="services-image">
                             <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}> 
                                <div className="image">
                                    <img src="/images/services/chat3.png" alt="image" />
                                </div>
                             </ScrollAnimation> 
                        </div>
                        {/* <div className="services-image"> */}
                            {/* <ScrollAnimation animateIn="fadeInRight" delay={50} animateOnce={true}> */}
                                {/* <div className="image"> */}
                                    {/* <img src="/images/home/img1.jpg" alt="image" /> */}
                                {/* </div> */}
                            {/* </ScrollAnimation> */}
                        {/* </div>
                    {/* </div> */}
                {/* </div> */}
                
            </section>
        ); 
    }
}

export default ServiceRightImageStyle;