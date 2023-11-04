import React, { Component } from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import PageTitleArea from "../../components/Common/PageTitleArea";

import Footer from "../../components/Layouts/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
import FreeTrialArea from "../../components/HomeChatbot/FreeTrialArea";
import StickyButtons from "../../components/HomeChatbot/Sticky";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea pageTitle="Health Care" />
        <section className="free-trial-area ptb-100 bg-f4f5fe">
          <div className="container">
            <div className="free-trial-content">
              <h2>Communication made better for better patient outcomes</h2>
              <p>
                Achieve better patient outcomes with Plugtochat in-app
                communication features available anytime, anywhere .
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
                    Connect and integrate your Digital Health applications
                    quickly through PlugtoChat
                  </h2>
                  <p>
                    Rapidly deploy improved patient access with Plugtochat
                    in-app communications providing your patients the
                    convenience to reach care on-demand from anywhere.
                  </p>
                  <p>
                    Build in-app communication for the entire patient journey
                    using PlugtoChat SDK on your existing web & mobile app.
                  </p>

                  <Link href="/signup">
                    <a className="default-btn">
                      <i className="bx bxs-spreadsheet"></i>
                      Getting started tutorial
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
                      src="/images/useCases/health-care/healthcare2.png"
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
                      src="/images/useCases/health-care/healthcare1.png"
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
                    An innovative and faster way for Patient-Physician
                    communications
                  </h2>
                  <p>
                    Confidently navigate patient expectations and improve real-
                    time patient access to doctors by eliminating frustrating
                    wait times.
                  </p>
                  <p>
                    Plugtochat SDK integration provides your digital health
                    platforms with customized features to serve more patients
                    with unrelenting reliability with the ability to rapidly and
                    efficiently respond to the need at hand.
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
                    Enhanced private one-on-one chat for patients and physicians
                    over a secured platform
                  </h2>
                  <p>
                    Create immense communication possibilities between patients
                    &amp; doctors instantly. Enable patient’s messages to reach
                    directly to healthcare experts in real-time to share &amp;
                    discuss health issues, queries, diagnoses &amp; treatments.
                  </p>
                  <p>
                    The PlugtoChat SDK integrates chat features into your
                    existing web &amp; mobile app and ensures conversations
                    between doctors and patients flow with full confidentiality
                    from anywhere.
                  </p>

                  <Link href="/signup">
                    <a className="default-btn">
                      <i className="bx bxs-spreadsheet"></i>
                      Getting started tutorial
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
                      src="/images/useCases/health-care/healthcare4.png"
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
                      src="/images/useCases/health-care/healthcare5.png"
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
                    Group instant messaging backdrop for better conversations
                    among Physicians and Staff
                  </h2>
                  <p>
                    Improve communication between specialists, practitioners,
                    and other staff to help the doctors provide better service
                    to the patients. Health records, follow-up appointments,
                    diagnostic reports can be easily shared through group chats
                    with their team.
                  </p>
                  <p>
                    Enable effective communication between staff members by
                    integrating speedy Plugtochat group chat for every case and
                    bring specialists and staff together efficiently to
                    prioritize better patient outcomes.
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

        {/* <ServiceDetailsContent /> */}

        {/* <SubscribeStyleTwo /> */}

        {/* <OurLovingClients /> */}

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
