import React, { Component } from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import PageTitleArea from "../../components/Common/PageTitleArea";

import Footer from "../../components/Layouts/Footer";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import FreeTrialArea from "../../components/HomeChatbot/FreeTrialArea";
import StickyButtons from "../../components/HomeChatbot/Sticky";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea pageTitle="Education" />
        <section className="free-trial-area ptb-100 bg-f4f5fe">
          <div className="container">
            <div className="free-trial-content">
              <h2>Immersive E-learning for Students & Teachers</h2>
              <p>
                Connecting teachers with students with unparalleled options in a
                collaborative and robust environment for distance learning
              </p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <a className="default-btn" href="/signup">
                    <i className="bx bxs-hot"></i>
                    Try PlugtoChat
                    <span></span>
                  </a>
                </div>
                <div>
                  <Link href="/contact">
                    <a className="default-btn">
                      <i className="bx bxs-hot"></i>
                      Talk to An Expert
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-area bg-right-color ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="services-content">
                <div className="content left-content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>Borderless Classroom Experience through e-Learning</h2>
                  <p>
                    Learning sessions are interactive if we bridge the gap
                    between students and teachers. To ensure concepts are
                    communicated clearly, direct chat integration is necessary
                    to your existing web & mobile app. With dedicated chat
                    rooms, students and teachers can solve problems together in
                    real-time.
                  </p>
                  <p>
                    Once you allow the PlugtoChat SDK to integrate chat features
                    into your existing web & mobile app, it will deliver
                    one-to-one or multi-student chat to enhance the learning.
                  </p>

                  <Link href="/signup">
                    <a className="default-btn">
                      <i className="bx bxs-spreadsheet"></i>
                      Getting starting tutorial
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="services-image">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={50}
                  animateOnce={true}
                >
                  <div className="image">
                    <img src="\images\useCases\education\e1.jpg" alt="image" />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
        <section className="services-area bg-left-color bg-f4f6fc ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="services-image">
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  delay={50}
                  animateOnce={true}
                >
                  <div className="image">
                    <img src="\images\useCases\education\e2.jpg" alt="image" />
                  </div>
                </ScrollAnimation>
              </div>

              <div className="services-content">
                <div className="content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>Detailed course discussions through the direct chat</h2>
                  <p>
                    Improve communication between teachers, students, and
                    education platforms by digital landscaping your classrooms.
                    Most educators struggle to monitor students and deliver
                    secure messages through online platforms they can trust. By
                    integrating Plugtochat in-app messaging platform, you can
                    start delivering multichannel communications that improve
                    the teaching process.
                  </p>
                  <p>
                    For a student with questions on an assignment or course and
                    requires some clarification on topics, Plugtochat can get
                    the answers they need from the mentor using real-time chat
                    features.
                  </p>

                  {/* <Link href="/service-details">
                      <a className="default-btn">
                        <i className="bx bxs-spreadsheet"></i>
                        Learn More
                        <span></span>
                      </a>
                    </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-area bg-right-color ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="services-content">
                <div className="content left-content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>
                    Innovative classroom Experience for students and teachers
                  </h2>
                  <p>
                    Real classroom-like experience with Plugtochat advanced
                    customization features to keep students engaged in online
                    curriculum with streamlined messaging channels. Use
                    real-time messaging through chat to engage students for test
                    and quiz delivery. Make collaboration simple between
                    students and teachers using in-app messaging.
                  </p>

                  {/* <Link href="/service-details">
                    <a className="default-btn">
                      <i className="bx bxs-spreadsheet"></i>
                      Getting started tutorial
                      <span></span>
                    </a>
                  </Link> */}
                </div>
              </div>

              <div className="services-image">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={50}
                  animateOnce={true}
                >
                  <div className="image">
                    <img src="\images\useCases\education\e3.jpg" alt="image" />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
        <section className="services-area bg-left-color bg-f4f6fc ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="services-image">
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  delay={50}
                  animateOnce={true}
                >
                  <div className="image">
                    <img src="\images\useCases\education\e4.jpg" alt="image" />
                  </div>
                </ScrollAnimation>
              </div>

              <div className="services-content">
                <div className="content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>Attract, Engage and convert with Plugtochat</h2>
                  <p>
                    Harness the features of Plugtochat messaging on both web and
                    mobile applications to reach and engage students at any
                    point. Use our complete chat platform to connect students
                    and teachers through preferred channels, whether you’re in a
                    classroom setting or operating an educational tech product.
                    Make it possible for teachers to address students on 1 to 1
                    chat or in the group on their terms in both public and
                    private chat rooms.
                  </p>
                  <p>
                    With APIs' help, the companies can implant reliable and
                    securable omnichannel communication capabilities into their
                    applications. Thus, it can enhance the needs of businesses,
                    customers as well as end-users.
                  </p>

                  <Link href="/signup">
                    <a className="default-btn">
                      <i className="bx bxs-spreadsheet"></i>
                      Getting started titorial
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-area ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="faq-accordion">
                  <h2>
                    Out-of-the-box notifications for
                    <span> Education</span>
                  </h2>
                  <p>
                    Push, email, SMS, and desktop notifications are all
                    supported by the PlugtoChat notification system. This allows
                    you to keep users up to date on any channel.
                  </p>

                  <Accordion allowZeroExpanded preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          We scale right along with you
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Want a robust notification system that supports push,
                          email, SMS, and desktop notifications? Want to keep
                          users in the loop? Then Plugtochat is the right
                          integration for you where along with messaging you can
                          customize everything, anytime.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Email & SMS fallback
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          We care for every interaction. That's why we ensure
                          your users are always up-to-date with every
                          interaction even when they are offline.
                        </p>
                        <p>
                          With Plugtochat, configure your platform to send an
                          email or SMS and deliver every communication details
                          efficiently while ensuring direct and speedy delivery.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Replying to email syncs the message to chat
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Now onwards, never miss a reply nor experience a
                          broken chat loop. With Plugtochat your user can
                          directly reply to an email notification, and the chat
                          will continue its interactions without delays.
                        </p>
                        <p>
                          Also, you can empower your users to come back to your
                          platform - either way, their responses will be heard
                          to keep a healthy interactive chat live.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Users engaged with desktop and push notification
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Plugtochat features provide your platform to grow
                          engagement through intimate conversations between
                          friends and communities but to keep it alive is
                          important. Use customizable desktop & push
                          notifications to achieve it.
                        </p>
                        <p>
                          Receive quick user responses from mobile users through
                          push notifications even if they are on the move. For
                          idle desktop users, notifications pop-ups will do the
                          job.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <Link href="#"> View all features</Link>
                  </Accordion>
                </div>
              </div>

              <div className="col-lg-5 col-md-12">
                <div className="faq-image">
                  <img src="/images/useCases/education/e5.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <FreeTrialArea />
        <StickyButtons />

        {/* <ServiceDetailsContent />

                <SubscribeStyleTwo />

                <OurLovingClients /> */}

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
