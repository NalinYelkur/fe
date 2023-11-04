import React, { Component } from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import PageTitleArea from "../../components/Common/PageTitleArea";
import Footer from "../../components/Layouts/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
import FreeTrialArea from "../../components/HomeChatbot/FreeTrialArea";
import StickyButtons from "../../components/HomeChatbot/Sticky";

function ServiceDetails() {
  return (
    <>
      <NavbarThree />

      <PageTitleArea pageTitle="Virtual Events" />
      <section className="features-area pt-100 pb-70 bg-f4f6fc">
        <div className="container">
          <div className="section-title">
            <h2>Initiate Emerging, Enchanting and Engaging virtual events</h2>
            <p>
              Delight your attendees, exhibitors, and speakers with an amazing
              messaging experience.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-features-box">
                <h3>Quickly implement and launch your business</h3>
                <p>
                  We offer you a completely tailored solution that suits all
                  your virtual event needs. Integrate seamlessly with your
                  current applications and websites and launch it; it's that
                  easy! Envisioned to develop the best chat experiences for your
                  virtual platforms with pre-built UI components.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-features-box">
                <h3>Retain fully controlled virtual Q&A sessions</h3>
                <p>
                  Incorporating question & answer sessions into an event help
                  audiences interact with the speakers.Plugtochat enables you to
                  set up a virtual Q&A session and integrates it into your
                  virtual events platform.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-features-box">
                <h3>
                  Blend Customizable Plugtochat UI theme features to match your
                  business
                </h3>
                <p>
                  Append the adaptive and highly specialized Plugtochat UI
                  themes customization features to match your app theme and
                  website theme properties.
                </p>
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

                <h2>Interactive chat rooms for exhibitors and participants</h2>
                <p>
                  Plugtochat customizable chat rooms connect your attendees and
                  create real conversation chats for a virtual event experience
                  as conversational as possible. Setup your virtual conference
                  booth to connect with your event participants just the way you
                  do in offline events. Every exhibitor connected in the virtual
                  booth can access our plug-and-play options to share documents,
                  images, and videos with the participants.
                </p>

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
              <ScrollAnimation
                animateIn="fadeInRight"
                delay={50}
                animateOnce={true}
              >
                <div className="image">
                  <img
                    src="/images/useCases/virtual-event/vitual 1.jpg"
                    alt="image"
                  />
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
                  <img src="/images/services/chat2.png" alt="image" />
                </div>
              </ScrollAnimation>
            </div>

            <div className="services-content">
              <div className="content">
                <div className="icon">
                  {/* <img src="/images/icon1.png" alt="image" /> */}
                </div>

                <h2>Secure and efficient<br/> one-on-one chats</h2>
                <p>
                  Allow users to interact more effectively to sustain the user
                  experience of 1-on-1 conversations. Integrate Plugtochat
                  potentiality into your discussions to redefine the chat
                  experience and drive immense engagement. Create your
                  completely custom 1-on-1 chat conversations in-app or website
                  by incorporating pre-built PlugtoChat with extending
                  functionality with best-in -class integrations and additional
                  features that are offered by apps like WhatsApp and Facebook
                  Messenger.
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
      <FreeTrialArea />
      <StickyButtons />

      <Footer />
    </>
  );
}

export default ServiceDetails;
