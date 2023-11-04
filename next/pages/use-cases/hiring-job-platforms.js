import React, { Component } from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import PageTitleArea from "../../components/Common/PageTitleArea";

import Footer from "../../components/Layouts/Footer";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import FreeTrialArea from "../../components/HomeChatbot/FreeTrialArea";
import StickyButtons from "../../components/HomeChatbot/Sticky";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea pageTitle="Hiring and Job Platforms" />
        <section className="free-trial-area ptb-100 bg-f4f5fe">
          <div className="container">
            <div className="free-trial-content">
              <h2>
                Get qualified applicants and source the right talent pools
              </h2>
              <p>
                Add direct chat and engage with candidates from anywhere, on any
                device
              </p>
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
                    Integrate Applicant- Recruiter chat on your hiring platform
                  </h2>
                  <p>
                    An organization should have the correct perceptions and
                    insights regarding how to reach organizational goals.
                    Plugtochat SDK & API for online hiring platforms delivers
                    you all the necessary features to make it possible to add
                    direct messages and group chats, similar to chat rooms and
                    user to user chat on your app or website.
                  </p>
                  <p>
                    Integrate Plugtochat and source the right applicant on your
                    digital job platform.
                  </p>

                  <Link href="/signup">
                    <a className="default-btn">
                      <i className="bx bxs-spreadsheet"></i>
                      Try Now
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
                    <img
                      src="/images/useCases/hiring/hiring4.png"
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
                    <img
                      src="/images/useCases/hiring/hiring1.png"
                      alt="image"
                    />
                  </div>
                </ScrollAnimation>
              </div>

              <div className="services-content">
                <div className="content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>
                    Precisely attracting and retaining the right talent by
                    employers through PlugtoChat
                  </h2>
                  <p>
                    It is important to remain flexible and engaged to source the
                    right talent for the companies. Reach the right candidates
                    at the right time to unlock their full potential. Give your
                    team and applicants a place to focus in public or private
                    chat rooms. Share information, get quick responses, and
                    collaborate to get work done.
                  </p>
                  <p>
                    Without waiting on emails or phone calls empower employers
                    to reach out to their candidates for a quick question or to
                    discuss.
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
                    Avail every interaction from applicants and freelancers
                    through a secured chat platform
                  </h2>
                  <p>
                    Applicants and freelancers have many reasons to stay
                    connected with employers. Plugtochat tools provide exact
                    features to meet your modern business demands from the first
                    to last interaction. Real-time chats are provided with
                    customizable options for quick communications.
                  </p>
                  <p>
                    Once you allow the PlugtoChat SDK to integrate chat features
                    into your existing web &amp; mobile app, it will deliver the
                    user-to-user chat and turn in projects on time or keep
                    everything on schedule
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
                    <img
                      src="/images/useCases/hiring/hiring3.png"
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
                    <img
                      src="/images/useCases/hiring/hiring2.png"
                      alt="image"
                    />
                  </div>
                </ScrollAnimation>
              </div>

              <div className="services-content">
                <div className="content">
                  <div className="icon">
                    {/* <img src="/images/icon1.png" alt="image" /> */}
                  </div>

                  <h2>
                    Real Time Chat platform that retains every interaction
                  </h2>
                  <p>
                    Provide freelance hiring platforms with the tools they need
                    to effectively communicate with each other ​and remove
                    complexity to reduce the time spent managing the offline
                    systems. Get yourself an online hiring platform with
                    everything on it from the start of the projects to its
                    after-sale interactions.
                  </p>
                  <p>
                    Create and empower your hiring administration platform with
                    the Plugtochat SDK and API tools to meet your modern
                    business demands. Make your agents more productive and
                    engaging with candidates from home, office, or outdoors.
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

        {/* <ServiceDetailsContent />

                <SubscribeStyleTwo />

                <OurLovingClients /> */}

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
