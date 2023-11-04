import React, { Component } from "react";
import NavbarThree from "../components/Layouts/NavbarThree";

import Footer from "../components/Layouts/Footer";
// import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import Particles from "react-particles-js";
import dynamic from "next/dynamic";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import FreeTrialArea from "../components/HomeChatbot/FreeTrialArea";
import StickyButtons from "../components/HomeChatbot/Sticky";

const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const particleOpt = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#fff",
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};

class IndexSaas extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <>
        <NavbarThree />
        {/* <MainBanner /> */}
        <>
          {/* Popup Modal Video If you want to change the video need to update below videoID */}
          {/* <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="T__zQwCHWjE"
            onClose={() => this.setState({ isOpen: false })}
          /> */}
          <ModalVideo
            channel='custom'
            isOpen={this.state.isOpen}
            url='/videos/Website Presentation home page video.mp4'
            onClose={() => this.setState({ isOpen: false })}
          />

          <div className="saas-banner">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container max-width-1290">
                  <div className="row align-items-center pt-5">
                    <div className="col-lg-6 col-md-12">
                      <div className="saas-image mt-70">
                        <ScrollAnimation
                          animateIn="fadeInDown"
                          delay={100}
                          animateOnce={true}
                        >
                          <img src="/images/saas-shape/arrow.png" alt="arrow" />
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="fadeInUp"
                          delay={100}
                          animateOnce={true}
                        >
                          <img src="/images/saas-shape/box1.png" alt="box1" />
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="fadeInLeft"
                          delay={100}
                          animateOnce={true}
                        >
                          <img src="/images/saas-shape/boy1.png" alt="boy1" />
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="zoomIn"
                          delay={100}
                          animateOnce={true}
                        >
                          <img src="/images/saas-shape/boy2.png" alt="boy2" />
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="bounceIn"
                          delay={100}
                          animateOnce={true}
                        >
                          <img src="/images/saas-shape/boy3.png" alt="boy3" />
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="fadeInDown"
                          delay={100}
                          animateOnce={true}
                        >
                          <img
                            src="/images/saas-shape/digital-screen.png"
                            alt="Digital Screen"
                          />
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="zoomIn"
                          delay={100}
                          animateOnce={true}
                        >
                          <img
                            src="/images/saas-shape/filter1.png"
                            alt="filter1"
                          />
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="fadeInUp"
                          delay={100}
                          animateOnce={true}
                        >
                          <img
                            src="/images/saas-shape/filter2.png"
                            alt="filter2"
                          />
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="rotateIn"
                          delay={100}
                          animateOnce={true}
                        >
                          <img
                            src="/images/saas-shape/filter3.png"
                            alt="filter3"
                          />
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="fadeInUp"
                          delay={100}
                          animateOnce={true}
                        >
                          <img src="/images/saas-shape/girl1.png" alt="girl1" />
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="zoomIn"
                          delay={100}
                          animateOnce={true}
                        >
                          <img src="/images/saas-shape/girl2.png" alt="girl2" />
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="zoomIn"
                          delay={100}
                          animateOnce={true}
                        >
                          <img
                            src="/images/saas-shape/monitor.png"
                            alt="monitor"
                          />
                        </ScrollAnimation>

                        {/* Main image */}
                        <ScrollAnimation
                          animateIn="zoomIn"
                          delay={100}
                          animateOnce={true}
                        >
                          <img
                            src="/images/saas-shape/saas-main-image.png"
                            alt="Main image"
                          />
                        </ScrollAnimation>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="hero-content pl-4">
                        <h1>
                          Quickly Build a Reliable & Full-Featured chat
                          experience into any Mobile or Web App
                        </h1>
                        <p>
                          Highly reliable chat infrastructure and feature-rich
                          SDKs with pre-built UI
                        </p>

                        <div className="banner-btn">
                          <div className="d-flex">
                            {/* <Link href="/contact">
                              <a className="default-btn">
                                <i className="bx bxs-hot"></i>
                                Get Started
                                <span></span>
                              </a>
                            </Link> */}

                            {/* <div
                              onClick={(e) => {
                                e.preventDefault();
                                this.openModal();
                              }}
                              className="video-btn popup-youtube"
                            >
                              <i className="bx bxs-right-arrow"></i> Watch Video
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shape-rotate rotateme">
              <img src="/images/saas-shape/shape-rotate.png" alt="image" />
            </div>

            <div className="particles-content">
              <Particles params={{ ...particleOpt }} />
            </div>
          </div>
        </>
        <section className="ptb-100">
          {/* <div className="container">
                    <div className="section-title">
                        <h2 className="mb-2">More to Discover</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div> */}


          <div className="video-container video-box ">
            <video src="/videos/pulgtochat2.mp4" alt="plugtochatvideo" className="container nalin" autoPlay muted style={{ maxWidth: '1000px', height: 'auto', marginBottom: '50px', borderRadius:"50px" }}>
              Your browser does not support the video tagx
            </video>
          </div>

          <div className="overview-item">
            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
              <div className="container max-width-1290">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="overview-left-img">
                      {/* <img src="/images/home-saas/feature2.png" alt="image" /> */}
                      <img src="/images/home-saas/feature7.png"  alt="image"  />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="overview-content pl-3">
                      {/* <span className="number">01</span> */}
                      <h3>Real-time messaging</h3>
                      <p>
                        Increase real-time engagement in your app with
                        Plugtochat powering your messaging features. Build your
                        platform with users, on our highly scalable
                        infrastructure built for security, reliability, and
                        certification by abiding by compliance standards. With
                        an easy-to-use chat API and native chat SDKs for
                        Android, iOS, and JavaScript create conversations that
                        range from private 1:1 to group chat.
                      </p>
                      <p>
                        <strong>
                          Provide your users an unbelievable experience with all
                          the essential messaging features:
                        </strong>
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <ul>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Channels, groups & topics
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Online presence indicators
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            In-conversation search
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Real-time translation
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Typing & read indicators
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Unread messages badge
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Conversation history
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            File sharing
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Location sharing
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Text formatting
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Emojis
                          </li>
                        </ul>
                      </div>

                      {/* <Link href="/service-details">
                                            <a className="default-btn black-btn">
                                                <i className='bx bxs-arrow-to-right'></i>
                                                Read More 
                                                <span></span>
                                            </a>
                                        </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              
            </ScrollAnimation>
          </div>
          <section className="faq-area ptb-100">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="faq-accordion">
                    <h2>
                      Pre-built Chat UI
                      for <span>Marketplace</span>
                    </h2>
                    <p>
                      Plugtochat&#39;s Pre-built User Interface helps you build
                      a top- notch experience using a combination of UI elements
                      and our SDKs. Build the features &amp; extensions you need
                      to create the complete experience. Highly customizable and
                      available for iOS, Android, &amp; Web, they all work
                      together, making cross-platform child’s play. Expedite
                      your ability to understand the works with best-in- class
                      documentation, in-depth tutorials, and demo apps for every
                      platform.
                    </p>

                    <Accordion allowZeroExpanded preExpanded={["a"]}>
                      <AccordionItem uuid="a">
                        <AccordionItemHeading>
                          <AccordionItemButton >
                            Ready-to-use popup, chatbox and inbox UI
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Engage and improve your interactions with our chat
                            pop-up. Want to try it? Come chat with us.
                          </p>
                          <p>
                            Try pre-built chatbox and inbox to experience a
                            different type of chat UI
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="b">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Cross-device user interface
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Plugtochat is fully responsive on nearly all mobile
                            phones and computers.
                          </p>
                          <p>
                            Our SDKs are designed to help you build quickly. To
                            ensure best-in- class performance in different
                            operating environments, Plugtochat is available for
                            iOS, Android, &amp; Web.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="c">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Responsive cross-browser UX
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            With an in-house testing team, we have successfully
                            integrated Plugtochat on nearly all mobile phones
                            and computers.
                          </p>
                          <p>
                            The performance accelerates the User-Centric
                            Communication wheel in real-time across browsers.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="d">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Multi-Language User Interface
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Bringing the native language chat experience through
                            a real-time multilingual setup that translates
                            messages up to 100+ languages, sent and received
                            within the chat screen. For all of your platform's
                            users, you can change the default language on the
                            dashboard.
                          </p>
                          <p>
                            Also, you can set a language per User Configuration
                            in case you need to support multiple languages for a
                            different user.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      {/* <Link href='#'> View all features</Link> */}
                    </Accordion>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="faq-image">
                    {/* <img src="/images/features/features2.png" alt="image" /> */}
                    <img src="/images/home-saas/Frame 1116600518.png"  alt="image"  />
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="overview-item">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={150}
              animateOnce={true}
            >
              <div className="container max-width-1290">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="overview-left-img">
                      <img src="/images/home-saas/feature2.jpg" alt="image"  style={{ borderRadius:'80px' }}/>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="overview-content pl-3">
                      {/* <span className="number">03</span> */}
                      <h3>Customizable design</h3>
                      <p>
                        Use Plugtochat Themes to customize elegantly and blend
                        the chat UI with your app or website design. From the
                        dashboard, the user can change the theme of the chatbot.
                        Themes let you change the core design aspects of the UI
                        with simple CSS properties.
                      </p>
                      <p>
                        <strong>You can customize:</strong>
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <ul>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Fonts
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Colors
                          </li>

                          <li>
                            <i className="bx bx-badge-check"></i>
                            Message style
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Shapes
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Borders
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Width & height
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            Avatar style
                          </li>
                          <li>
                            <i className="bx bx-badge-check"></i>
                            ...and a lot more
                          </li>
                        </ul>

                        {/* <Link href="/service-details">
                        <a className="default-btn black-btn">
                          <i className="bx bxs-arrow-to-right"></i>
                          Read More
                          <span></span>
                        </a>
                      </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="overview-item">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={100}
              animateOnce={true}
            >
              <div className="container max-width-1290">
                <div className="row align-items-center">
                  {/* For mobile device */}
                  <div className="col-lg-6 col-md-6 d-block d-md-none">
                    <div className="overview-right-img mt-0 mb-4">
                      {/* <img src="/images/home-saas/feature21.jpg" alt="image" /> */}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="overview-content pl-3">
                      {/* <span className="number">02</span> */}
                      <h3>Developer-friendly API</h3>
                      <p>
                        Now connect your analytics or UI elements with ease
                        using Plugtochat JavaScript API. Get notifications when
                        new messages are written or received and when the user
                        navigates between conversations during live events. Use
                        your UI elements with our SDKs and build the features &
                        extensions you need to create the complete experience.
                      </p>
                      <p>
                        Manage your users, conversations, and messages through
                        Plugtochat REST API. Be it new messages, new
                        conversations, or any new incidents at the backend of
                        events, always stay notified with our webhooks.
                      </p>
                    </div>
                  </div>

                  {/* For other device */}
                  <div className="col-lg-6 col-md-6 d-none d-md-block">
                    <div className="overview-right-img">
                      <img src="/images/home-saas/feature21.jpg" alt="image"  style={{borderRadius:"80px", height:"399px"}}/>
                      {/* <img src="/images/home-saas/feature3.png" alt="image" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <section className="faq-area ptb-100">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="faq-image">
                    <img src="/images/features/f2.jpg" alt="image"  style={{borderRadius:"80px"}}/>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="faq-accordion">
                    <h2>
                      Out-of-the-box
                      {/* for <span>Marketplace</span> */}
                    </h2>
                    <p>
                      Push, email, SMS, and desktop notifications are all
                      supported by the PlugtoChat notification system. This
                      allows you to keep users up to date on any channel.
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
                            Want a robust notification system that supports
                            push, email, SMS, and desktop notifications? Want to
                            keep users in the loop?
                          </p>
                          <p>
                            Then Plugtochat is the right integration for you
                            where along with messaging you can customize
                            everything, anytime.
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
                            We care for every interaction. That&#39;s why we
                            ensure your users are always up-to-date with every
                            interaction even when they are offline.
                          </p>
                          <p>
                            With Plugtochat, configure your platform to send an
                            email or SMS and deliver every communication details
                            efficiently while ensuring speedy delivery.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="c">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Reply to Emails, Messages &amp; Chat
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            From now onwards, never miss to reply or experience
                            a broken chat loop. With Plugtochat your user can
                            directly reply to an email notification, and the
                            chat will continue its interactions without delays.
                          </p>
                          <p>
                            Also, you can empower your users to come back to
                            your platform - either way, their responses will be
                            heard to keep a healthy interactive chat live.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="d">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Users engaged with desktop and push notifications
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Plugtochat features provide your platform to grow
                            engagement through intimate conversations between
                            friends and communities but to keep it alive is
                            important.
                          </p>
                          <p>
                            Use customizable desktop & push notifications to
                            achieve it. Receive quick user responses from mobile
                            users through push notifications even if they are on
                            the move. For idle desktop users, notifications
                            pop-ups will do the job
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      {/* <Link href='#'> View all features</Link> */}
                    </Accordion>
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
                      Message Analytics
                      {/* for <span>Marketplace</span> */}
                    </h2>
                    <p>
                      Be vigilant and take action when required using moderation
                      tools like the activity view in the dashboard. Proactively
                      moderate messages using the mask contact info feature and
                      never worry about your valuable information leak
                    </p>

                    <Accordion allowZeroExpanded preExpanded={["a"]}>
                      <AccordionItem uuid="a">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Mask contact information
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Powerful tool that enables you to configure
                            exceptions in details while preventing users from
                            exchanging email addresses, phone numbers and
                            website addresses.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="b">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Word blacklists
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Keep the chats clean! Never allow profanity, spam to
                            prevail. Always confirm words that create toxicity
                            related to these categories and offensive words are
                            blacklisted
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="c">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            Analytics dashboard
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>
                            Stay in full control of communication and act when
                            necessary to prevent spam accounts, messages, freeze
                            bad actors and automatic image filters through
                            Plugtochat analytics dashboard to increase the
                            integrity of the app.
                          </p>
                        </AccordionItemPanel>
                      </AccordionItem>

                      {/* <Link href='#'> View all features</Link> */}
                    </Accordion>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div className="faq-image">
                    <img src="/images/features/f4.jpg" alt="image"  style={{borderRadius:"83px"}}/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>


        <FreeTrialArea />
        <StickyButtons />

        <Footer />
      </>
    );
  }
}

export default IndexSaas;